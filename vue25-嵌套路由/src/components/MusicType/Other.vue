<template>
	<div>
		<div class="box">
			<div>组件Other.vue</div>
			<div>其他音乐1</div>
			<div>其他音乐2</div>
			<div>其他音乐3</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Other",
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
		background-color: rgb(238, 233, 157);
	}
</style>
