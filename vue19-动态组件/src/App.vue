<template>
	<div>
		<div class="app-box">
			<div>父组件App.vue</div>
			<!-- 通过vue内置的<component>组件中的is属性动态切换组件 -->
			<component is="my-left"></component>

			<!-- 通过v-bind绑定，实现动态切换组件，is属性值中填写组件名 -->
			<component :is="ComponentName"></component>
			<button @click="showLeft">显示left组件</button>
			<button @click="showRight">显示right组件</button>

			<!-- 使用 vue 内置的 <keep-alive> 组件将内部组件进行缓存，而不是销毁组件 -->
			<!-- include 属性用来指定需要缓存的组件，多个组件名之间使用英文的逗号分隔 -->
			<keep-alive include="my-left,my-right">
				<component :is="ComponentName"></component>
			</keep-alive>
			<!-- exclude 属性用来指定排除缓存的组件，多个组件名之间使用英文的逗号分隔 -->
			<keep-alive exclude="my-left,my-right">
				<component :is="ComponentName"></component>
			</keep-alive>
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
		name:"App",
		// components用于注册组件
		components: {
			"my-left": left,
			"my-right": right,
		},
		// data用于定义数据模型，数据提供给el指定的容器使用（组件中的data不能指向对象，必须是函数）
		data: function () {
			// 返回数据对象
			return {
				ComponentName: "",
			};
		},
		methods: {
			showLeft() {
				this.ComponentName = "my-left";
			},
			showRight() {
				this.ComponentName = "my-right";
			},
		},
	};
</script>

<!-- style标签里定义less样式 -->
<style lang="less">
	.app-box {
		border-radius: 15%; // 圆角
		display: flex; // 父元素设置flex属性
		margin: auto; // 外边距
		padding: 10px; // 内边距
		text-align: center; // 文本水平居中
		flex-direction: column; // 主轴为垂直方向，起点在上沿
		justify-content: center; // 水平主轴居中
		align-items: center; // 垂直交叉轴居中
		justify-content: space-around; // 整体居中
		background-color: orange; // 背景色
		width: 600px;
		height: 300px;
	}
</style>
