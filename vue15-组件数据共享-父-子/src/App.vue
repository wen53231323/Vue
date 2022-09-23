<template>
	<div>
		<div class="app-box">
			<div>App.vue</div>
			<!-- 父向子数据共享使用v-bind -->
			<father-son :son_data="father_data"></father-son>
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
			"father-son": son,
		},
		// data用于定义数据模型，数据提供给el指定的容器使用（组件中的data不能指向对象，必须是函数）
		data: function () {
			// 返回数据对象
			return {
				father_data: "父组件属性",
			};
		},
	};
</script>

<!-- style标签里定义less样式 -->
<style lang="less">
	.app-box {
		border-radius: 15%; // 圆角
		width: 150px; // 宽
		padding: 10px; // 内边距
		margin: auto; // 外边距
		flex-direction: column; // 主轴为垂直方向，起点在上沿
		text-align: center; // 文本水平居中
		display: flex; // 父元素设置flex属性
		justify-content: center; // 水平主轴居中
		align-items: center; // 垂直交叉轴居中
		justify-content: space-around; // 整体居中
		background-color: orange; // 背景色
	}
</style>
