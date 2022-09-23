<template>
	<div>
		<div class="app-box">
			<!-- 使用子组件，不允许有大写字母，可能会出错 -->
			<my-left></my-left>
			<div>父组件App.vue</div>
			<my-right></my-right>
		</div>
	</div>
</template>

<!-- script里定义js行为或导入文件 -->
<script>
	// 默认导入
	import left from "@/components/Left.vue";
	import right from "@/components/Right.vue";
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		// 组件名称
		name: "App",
		// components用于注册组件
		components: {
			"my-left": left,
			"my-right": right,
		},
		// data用于定义数据模型，数据提供给el指定的容器使用（组件中的data不能指向对象，必须是函数）
		data: function () {
			// 返回数据对象
			return {
				username: "小明",
			};
		},
		// methods用于定义事件的处理函数
		methods: {},
		// computed用于定义计算属性函数（私有计算属性）
		computed: {},
		// filters用于定义过滤器函数（私有过滤器）
		filters: {},
		// watch用于定义监听器函数
		watch: {},
	};
</script>

<!-- style标签里定义less样式 -->
<style lang="less">
	.app-box {
		margin: auto;
		text-align: center; /*文本水平居中*/
		display: flex; /*父元素设置flex属性*/
		justify-content: center; /*水平主轴居中*/
		align-items: center; /*垂直交叉轴居中*/
		justify-content: space-around; /*整体居中*/
		border-radius: 15%;
		width: 600px;
		height: 300px;
		background-color: orange;
	}
</style>
