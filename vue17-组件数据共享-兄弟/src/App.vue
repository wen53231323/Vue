<template>
	<div>
		<div class="app-box">
			<son-A></son-A>
			<son-B></son-B>
		</div>
	</div>
</template>

<!-- script里定义js行为或导入文件 -->
<script>
	// 默认导入
	import sonA from "@/components/SonA.vue";
	import sonB from "@/components/SonB.vue";
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		// components用于注册组件
		components: {
			"son-A": sonA,
			"son-B": sonB,
		},
		// data用于定义数据模型，数据提供给el指定的容器使用（组件中的data不能指向对象，必须是函数）
		data: function () {
			// 返回数据对象
			return {};
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
