<!-- template标签里定义html模板 -->
<template>
	<div id="app">
		<!-- Element UI 官方组件代码 -->
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
	</div>
</template>

<!-- script里定义js行为或导入导出文件 -->
<script>
	// 默认导出，向其他模块共享成员（允许使用一次）
	export default {
		name: "App",
	};
</script>

<!-- style标签里定义样式 -->
<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
