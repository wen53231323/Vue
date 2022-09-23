<template>
	<div>
		<div class="left-box">
			<div>子组件Left.vue</div>
			<div>
				<!-- 使用全局组件 -->
				<my-common :c="123"></my-common>
			</div>
		</div>
	</div>
</template>

<script>
	import App from "@/App.vue";
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		name: "test",
		components: { App },
	};
</script>

<style lang="less" scoped>
	.left-box {
		text-align: center; /*文本水平居中*/
		border-radius: 15%;
		background-color: greenyellow;
		height: 200px;
	}

	/deep/ .common-box {
		text-align: center; /*文本水平居中*/
		border-radius: 15%;
		background-color: rgba(17, 178, 241, 0.678);
		height: 100px;
	}
</style>
