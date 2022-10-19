<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>用户详情</span>
				<el-button style="float: right; padding: 3px 0" type="text" @click="goBack">返回</el-button>
			</div>
			<div class="text item">
				<p>账号：{{ userInfo.account }}</p>
				<p>密码：{{ userInfo.password }}</p>
				<p>昵称：{{ userInfo.nickName }}</p>
				<p>手机：{{ userInfo.phone }}</p>
				<p>邮箱：{{ userInfo.email }}</p>
				<p>创建时间：{{ userInfo.createTime | dateFormat }}</p>
				<p>头像：{{ userInfo.avatar }}</p>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: "UserDetail",
		props: ["id"],
		data() {
			return {
				// 接收数据
				userInfo: {},
			}
		},
		// 创建后调用
		created() {
			this.getUserInfo();
		},
		methods: {
			// 获取用户列表的数据
			async getUserInfo() {
				const { data: res } = await this.$http.get("/users/" + this.id);
				if (res.code !== 200) {
					return this.$message.error("获取用户详情数据失败！");
				}
				// 将获取的数据赋值
				this.userInfo = res.data;
				console.log(this.userInfo);
			},
			goBack() {
				this.$router.go(-1);
			},
		},
	};
</script>

<style lang="less" scoped></style>
