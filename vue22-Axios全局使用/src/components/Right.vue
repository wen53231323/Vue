<template>
	<div>
		<div class="right-box">
			<div>子组件Right.vue</div>
			<button @click="getInfo">发起post请求</button>
		</div>
	</div>
</template>

<script>
	// 默认导入（不推荐）
	// import axios from "axios";
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		name: "right",
		methods: {
			async getInfo() {
				// 使用解构赋值，从axios中封装的大对象中，把data属性解构出来，然后使用冒号:进行重命名
				const { data: response } = await this.$http.post(
					" http://localhost:8080/axios",
					{
						name: "zhangsan",
						password: 123456,
					}
				);
			},
		},
	};
</script>

<style lang="less" scoped>
	.right-box {
		border-radius: 15%; // 圆角
		text-align: center; // 文本水平居中
		margin: auto; // 外边距
		padding: 10px; // 内边距
		background-color: greenyellow;
	}
</style>
