<template>
	<div class="sonB">
		<div>sonB接收数据</div>
		<div>{{msg}}</div>
	</div>
</template>

<script>
	// 导入eventBus.js 模块，获取 Vue 的实例对象
	import eventBus from "./eventBus.js";
	export default {
		data() {
			return {
				msg: "",
			};
		},
		created() {
			// 绑定自定义事件eventTest
			// 语法：this.$on('事件名称', 事件处理函数)
			eventBus.$on("eventTest", (val) => {
				this.msg = val;
			});
		},
	};
</script>

<style lang="less" scoped>
	.sonB {
		width: 150px;
		height: 50px;
		border-radius: 15%;
		background-color: rgb(98, 227, 234);
	}
</style>