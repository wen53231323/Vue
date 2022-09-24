<template>
	<div>
		<div class="left-box">
			<div>子组件Son.vue</div>
			<!-- 在子组件中预留插槽，name属性用于为插槽命名，默认名为default -->
			<p><slot>插槽默认内容</slot></p>

			<p><slot name="header">头部插槽默认内容</slot></p>
			<!-- 在子组件中预留插槽，name属性用于为插槽命名，默认名为default -->
			<p><slot name="center">中心插槽默认内容</slot></p>
			<!-- 在子组件中预留插槽，name属性用于为插槽命名，默认名为default -->
			<p><slot name="footer">底部插槽默认内容</slot></p>

			<!-- 为预留的 <slot> 插槽绑定自定义属性 props 数据 -->
			<p><slot name="test" msg="hello" :user="userinfo">作用域插槽默认内容</slot></p>

		</div>
	</div>
</template>

<script>
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		// 组件命名
		name: "test",
		data() {
			return {
				userinfo:{
					username:"小明",
					age:"18"
				}
			}
		}
	};
</script>

<style lang="less" scoped>
	.left-box {
		border-radius: 15%; // 圆角
		text-align: center; // 文本水平居中
		margin: auto; // 外边距
		padding: 10px; // 内边距
		background-color: greenyellow;
	}
</style>
