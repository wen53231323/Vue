<template>
	<div>
		<div class="right-box">
			<div>子组件Right.vue</div>
		</div>
	</div>
</template>

<script>
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {};
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
