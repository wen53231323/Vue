<template>
	<div>
		<div class="box">
			<div>组件Move.vue</div>
		</div>
		<!-- 当安装和配置了 vue-router 后，可以使用 router-view 组件，作用是组件的占位符（动态切换组件） -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "Move",
	};
</script>

<style lang="less" scoped>
	.box {
		height: 500px;
		border-radius: 15%; // 圆角
		text-align: center; // 文本水平居中
		margin: auto; // 外边距
		padding: 10px; // 内边距
		background-color: rgb(238, 157, 207);
	}
</style>
