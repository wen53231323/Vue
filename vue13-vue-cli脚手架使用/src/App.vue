<!-- template标签里定义html模板 -->
<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<!-- script里定义js行为或导入导出文件 -->
<script>
	// 默认导入
	import HelloWorld from './components/HelloWorld.vue'

	// 默认导出，向其他模块共享成员（允许使用一次）
	export default {
		name: 'App',
		components: {
			HelloWorld
		}
	}
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
