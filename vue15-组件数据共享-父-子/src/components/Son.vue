<template>
	<div class="son-div">
		<div>父——>子</div>
		<div>{{son_data}}</div>
	</div>
</template>

<script>
	export default {
		// 自定义属性
		props: ["son_data"],
		data() {
			return {};
		},
	};
</script>
<style  lang="less" scoped>
	.son-div {
		padding: 10px;
		border-radius: 15%;
		background-color: rgb(166, 204, 113);
	}
</style>