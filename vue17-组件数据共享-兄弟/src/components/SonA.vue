<template>
	<div class="sonA">
		<div>sonA发送数据</div>
		<button @click="send">按钮</button>
	</div>
</template>

<script>
	// 导入eventBus.js 模块，获取 Vue 的实例对象
	import eventBus from "./eventBus.js";
	export default {
		data() {
			return {
				send_tata: "测试数据",
			};
		},
		methods: {
			send() {
				// 自定义的事件eventTest
				// 语法：this.$emit(自定义事件的名称,参数1,参数2,参数n)
				eventBus.$emit("eventTest", this.send_tata);
			},
		},
	};
</script>

<style lang="less" scoped>
	.sonA{
		width: 150px;
		height: 50px;
		border-radius: 15%;
		background-color: rgb(98, 227, 234);
	}
</style>