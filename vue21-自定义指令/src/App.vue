<template>
	<div>
		<div class="app-box">
			<div>父组件App.vue</div>
			<!-- 使用自定义指令 -->
			<div v-color="red">自定义指令的使用</div>
		</div>
	</div>
</template>

<!-- script里定义js行为或导入文件 -->
<script>
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		// 定义组件名
		name: "App",
		// data用于定义数据模型，数据提供给el指定的容器使用（组件中的data不能指向对象，必须是函数）
		data: function () {
			// 返回数据对象
			return {
				red: "red",
			};
		},
		// directives节点用于自定义指令
		directives: {
			color: {
				// bind 函数只调用 一 次，当指令第一次绑定到元素时调用，当 DOM 更新时 bind 函数不会被触发，在这里可以进行一次性的初始化设置
				// 形参中的 el 表示当前指令绑定的DOM元素对象
				// 形参中的 binding 用来获取指令的参数值
				bind(el, binding) {
					el.style.color = binding.value;
				},
				// inserted 函数被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
				inserted() {},
				// update函数每次 DOM 更新时被调用
				update(el, binding) {
					el.style.color = binding.value;
				},
				// componentUpdated函数表示指令所在组件的节点及其子节点全部更新后调用
				componentUpdated() {},
				// unbind函数只调用一次，指令与元素解绑时调用
				unbind() {},
			},

			// 如果 insert 和 update 函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式
			color(el, binding) {
				el.style.color = binding.value;
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
		width: 200px;
	}
</style>
