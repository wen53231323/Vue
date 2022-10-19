<template>
	<div>
		<!-- 添加按钮 -->
		<el-button type="primary" @click="dialogVisible = true">添加新用户</el-button>

		<!-- 用户的表格 -->
		<el-table :data="userList" stripe border>
			<!-- 这是索引列 -->
			<el-table-column type="index" label="索引"></el-table-column>
			<!-- 渲染用户名这一列 -->
			<el-table-column label="账号" prop="account"></el-table-column>
			<el-table-column label="昵称" prop="nickName"></el-table-column>
			<el-table-column label="创建时间">
				<!-- 使用插槽自定义时间格式 -->
				<template #default="scope">
					<!-- dateFormat全局过滤器 -->
					{{ scope.row.createTime | dateFormat }}
				</template>
			</el-table-column>

			<!-- 自定义操作 -->
			<el-table-column label="操作">
				<!-- v-slot:default="scope" -->
				<!-- #default="scope" -->
				<!-- v-slot="scope" -->
				<template v-slot="{ row }">
					<div>
						<router-link :to="'/users/' + row.id">详情</router-link>&nbsp;
						<a href="#" @click.prevent="onRemove(row.id)">删除</a>
					</div>
				</template>
			</el-table-column>
		</el-table>

		<!-- 添加用户的对话框 -->
		<el-dialog title="添加新用户" :visible.sync="dialogVisible" width="50%" @close="onDialogClosed">
			<!-- 添加用户的表单 -->
			<el-form :model="form" label-width="80px" :rules="formRules" ref="myaddForm">
				<!-- 采集用户的姓名 -->
				<el-form-item label="账号" prop="account">
					<el-input v-model="form.account"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input v-model.number="form.password"></el-input>
				</el-form-item>
				<el-form-item label="昵称" prop="nickName">
					<el-input v-model.number="form.nickName"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="phone">
					<el-input v-model="form.phone"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="onAddNewUser">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: "UserList",
		data() {
			// 声明校验年龄的函数
			let checkAge = (rule, value, cb) => {
				if (!Number.isInteger(value)) {
					return cb(new Error("请填写整数！"));
				}
				if (value > 100 || value < 1) {
					return cb(new Error("年龄必须在 1 到 100 之间！"));
				}
				cb();
			};
			return {
				userList: [],
				// 控制添加对话框的显示与隐藏
				dialogVisible: false,
				// 要采集的用户的信息对象
				form: {
					account: "",
					password: "",
					nickName: "",
					phone: "",
				},
				// 表单的验证规则对象
				formRules: {
					name: [
						{
							required: true,
							message: "姓名是必填项",
							trigger: "blur",
						},
						{
							min: 1,
							max: 15,
							message: "长度在 1 到 15 个字符",
							trigger: "blur",
						},
					],
					age: [
						{
							required: true,
							message: "年龄是必填项",
							trigger: "blur",
						},
						{ validator: checkAge, trigger: "blur" },
					],
					position: [
						{
							required: true,
							message: "头衔是必填项",
							trigger: "blur",
						},
						{
							min: 1,
							max: 10,
							message: "长度在 1 到 10 个字符",
							trigger: "blur",
						},
					],
				},
			};
		},
		// 创建后调用
		created() {
			// 调用此方法，请求用户列表数据
			this.getUserList();
		},
		methods: {
			// 获取用户列表的数据
			async getUserList() {
				// 发起ajax异步get请求
				const { data: res } = await this.$http.get("/users");
				// 不是200的响应码就提示
				if (res.code !== 200) {
					return console.log("用户列表数据获取失败！");
				}
				// 将获取的数据赋值
				this.userList = res.data;
				console.log(this.userList);
			},
			// 监听对话框关闭的事件
			onDialogClosed() {
				// 拿到 Form 组件的引用，调用 resetFields 函数，即可重置表单
				this.$refs.myaddForm.resetFields();
			},
			// 用户点击了添加按钮
			onAddNewUser() {
				this.$refs.myaddForm.validate(async (valid) => {
					if (!valid) return;
					// 需要执行添加的业务处理
					const { data: res } = await this.$http.post(
						"/users",
						this.form // 表单数据
					);
					if (res.code !== 200) {
						return this.$message.error("添加用户失败！");
					}
					this.$message.success("添加成功！");
					this.dialogVisible = false;
					this.getUserList();
				});
			},
			// 点击了删除的链接
			async onRemove(id) {
				// 询问用户是否删除
				const confirmResult = await this.$confirm(
					"此操作将永久删除该用户, 是否继续?",
					"提示",
					{
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					}
				).catch((err) => err);

				// 判断是否点击了确认按钮
				if (confirmResult !== "confirm") {
					return this.$message.info("取消了删除！");
				}
				// 发起请求，删除指定 id 的数据
				const { data: res } = await this.$http.delete("/users/" + id);
				if (res.code !== 200) {
					return this.$message.error("删除失败！");
				}
				// 提示删除成功，并刷新列表数据
				this.$message.success("删除成功！");
				this.getUserList();
			},
		},
	};
</script>

<style scoped lang="less">
	.el-table {
		margin-top: 15px;
	}
</style>
