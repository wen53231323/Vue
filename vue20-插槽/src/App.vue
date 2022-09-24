<template>
	<div>
		<div class="app-box">
			<div>父组件App.vue</div>
			<son-components>
				<template slot='default'>插槽</template>
				<!-- 使用插槽需要在template标签，使用v-slot:或slot属性指定插槽的名字 -->
				<template v-slot:header>头部插槽</template>
				<!-- template标签只起包裹作用，不会渲染出来 -->
				<template slot='center'>中心插槽</template>
				<!-- v-slot:指令简写为# -->
				<template #footer>底部插槽</template>

				<!-- 使用组件预留属性值 -->
				<template #test="Obj">
					作用域插槽接收的数据：<br>
					{{Obj}}<br>
					访问数据：<br>
					{{Obj.msg}},
					{{Obj.user.username}},
					{{Obj.user.age}}
				</template>
			</son-components>
		</div>
	</div>
</template>

<!-- script里定义js行为或导入文件 -->
<script>
	// 默认导入
	import son from "@/components/Son.vue";
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		name: "App",
		// components用于注册组件
		components: {
			"son-components": son,
		},
		// data用于定义数据模型，数据提供给el指定的容器使用（组件中的data不能指向对象，必须是函数）
		data: function () {
			// 返回数据对象
			return {};
		},
		methods: {},
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
		width: 200px;
	}
</style>
