<!-- template标签里定义html模板 -->
<template>
	<div>
		<div class="app-box">
			App.vue
			<!-- DOM（1）给DOM节点标记ref属性，可以理解给DOM起了个名字 -->
			<!-- <div ref="refdiv">点击按钮文本变红色</div>
			<button @click="updateColor">按钮</button> -->
			<!-- 组件（1）给组件标记ref属性，可以理解给组件起了个名字 -->
			<son-component ref="refson"></son-component>
			<div>点击按钮调用子组件方法</div>
			<button @click="helloSon">按钮</button>
		</div>
	</div>
</template>

<!-- script里定义js行为或导入文件 -->
<script>
	// 默认导入
	import son from "@/components/Son.vue";
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		// components用于注册组件
		components: {
			"son-component": son,
		},
		methods: {
			updateColor() {
				// DOM（2）加上ref之后，在$refs属性中多了这个元素的引用，可以通过vue实例的$refs属性拿到这个dom元素
				// 语法：this.$refs.引用的名称
				console.log(this.$refs.refdiv);
				// DOM（3）引用到实例之后，就可以操作页面上的 DOM 元素，修改box的字体颜色
				this.$refs.refdiv.style.color = "red";
			},
			helloSon() {
				// 组件（2）加上ref之后，在$refs属性中多了这个组件的引用
				console.log(this.$refs.refson);
				// 组件（3）引用到组件实例之后，可以调用组件中的方法，或者获得子组件的数据
				this.$refs.refson.hello();
				// this.$nextTick(cb) 表示当页面渲染完毕后，执行cb回调函数
				this.$nextTick(() => {
					this.$refs.refson.hello();
				});
			},
		},
	};
</script>

<!-- style标签里定义less样式 -->
<style lang="less">
	.app-box {
		margin: auto;
		flex-direction: column; /*主轴为垂直方向，起点在上沿*/
		text-align: center; /*文本水平居中*/
		display: flex; /*父元素设置flex属性*/
		justify-content: center; /*水平主轴居中*/
		align-items: center; /*垂直交叉轴居中*/
		justify-content: space-around; /*整体居中*/
		border-radius: 15%;
		width: 300px;
		height: 150px;
		background-color: orange;
	}
</style>
