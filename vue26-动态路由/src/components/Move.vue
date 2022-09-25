<template>
	<div>
		<div class="box">
			<div>组件Move.vue</div>
			<p>{{$route.params}}</p>
			<p>{{this.$route.params}}</p>

			<p>获取query参数  {{$route.query.name}}</p>

			<p>访问params参数值方式一  {{this.$route.params.id}}</p>
			<p>访问params参数值方式二  {{$route.params.id}}</p>
			<p>访问params参数值方式三  {{id}}</p>
		</div>
		<!-- 当安装和配置了 vue-router 后，可以使用 router-view 组件，作用是组件的占位符（动态切换组件） -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "Move",
		props: ["id"],
	};
</script>

<style lang="less" scoped>
	.box {
		height: 500px;
		border-radius: 15%; // 圆角
		text-align: center; // 文本水平居中
		margin: auto; // 外边距
		padding: 10px; // 内边距
		background-color: rgb(238, 157, 207);
	}
</style>
