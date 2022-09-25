<template>
	<div>
		<div class="box">
			<div>组件Music.vue</div>
			<div class="top-box">
				<!-- 声明子路由链接 -->
				<router-link to="/music/popular">流行</router-link>
				<router-link to="/music/other">其他</router-link>
			</div>
			<!-- 声明子路由占位符 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Music",
	};
</script>

<style lang="less" scoped>
	.box {
		height: 500px;
		border-radius: 15%; // 圆角
		text-align: center; // 文本水平居中
		margin: auto; // 外边距
		padding: 10px; // 内边距
		background-color: rgb(144, 224, 233);
	}
	.top-box {
		border-radius: 100%; // 圆角
		display: flex; // 父元素设置flex属性
		margin: auto; // 外边距
		padding: 10px; // 内边距
		justify-content: space-around; // 整体居中
		background-color: rgb(68, 232, 197); // 背景色
	}
</style>
