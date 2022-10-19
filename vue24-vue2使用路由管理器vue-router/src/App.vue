<template>
	<div>
		<div class="app-box">
			<!-- 使用子组件，不允许有大写字母，可能会出错 -->
			<div>根组件App.vue</div>
			<!-- 当安装和配置了 vue-router 后，可以使用 router-link 来替代普通的 a 链接 -->
			<router-link to="/home">首页</router-link>
			<router-link to="/move">电影</router-link>
			<router-link to="/music">音乐</router-link>
		</div>
		<!-- 当安装和配置了 vue-router 后，可以使用 router-view 组件，作用是组件的占位符（动态切换组件） -->
		<router-view></router-view>
	</div>
</template>

<!-- script里定义js行为或导入文件 -->
<script>
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		// 组件名称
		name: "App",
	};
</script>

<!-- style标签里定义less样式 -->
<style lang="less">
	.app-box {
		display: flex; // 父元素设置flex属性
		margin: auto; // 外边距
		padding: 10px; // 内边距
		text-align: center; // 文本水平居中
		justify-content: center; // 水平主轴居中
		align-items: center; // 垂直交叉轴居中
		justify-content: space-around; // 整体居中
		background-color: rgb(125, 232, 68); // 背景色
	}
	.router-link-active {
		background-color: red;
	}
</style>
