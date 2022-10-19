<template>
	<div>
		<div class="box">
			<div>组件Popular.vue</div>
			<div>流行音乐1</div>
			<div>流行音乐2</div>
			<div>流行音乐3</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Popular",
	};
</script>

<style lang="less" scoped>
	.box {
		width: 500px;
		height: 350px;
		border-radius: 15%; // 圆角
		text-align: center; // 文本水平居中
		margin: auto; // 外边距
		padding: 10px; // 内边距
		background-color: rgb(202, 247, 156);
	}
</style>
