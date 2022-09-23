<template>
	<div class="common-box">
		<p>全局组件Common.vue</p>
		<p>自定义属性：{{ id }},{{ username }},{{ password }}</p>
	</div>
</template>

<script>
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		// props是自定义属性，为当前组件指定初始值，
		// 自定义属性是只读的，不能直接修改，要想修改 props 的值，可以把 props 的值转存到 data 中，data 中的数据都是可读可写的
		props: {
			a: {
				// default 用来定义属性的默认值
				default: 1001,
				// type 用来定义属性的值类型
				type: Number,
			},
			b: {
				// default 用来定义属性的默认值
				default: "小明",
				// type 用来定义属性的值类型
				type: String,
			},
			c: {
				// default 用来定义属性的默认值
				default: 123456,
				// type 用来定义属性的值类型
				type: Number,
				// required 用来将属性设置为必填项，强制用户必须传递属性的值
				required: true,
			},
		},

		// data用于定义数据模型，数据提供给el指定的容器使用（组件中的data不能指向对象，必须是函数）
		data() {
			// 返回数据对象
			return {
				id: this.a,
				username: this.b,
				password: this.c,
			};
		},
	};
</script>

<style lang="less" scoped>
</style>
