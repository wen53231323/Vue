<template>
	<div class="son">
		<div>Son.vue</div>
	</div>
</template>

<script>
	export default {
		methods: {
			hello() {
				alert("组件中的方法被调用");
			},
		},
	};
</script>

<style lang="less" scoped>
	.son {
		padding: 5px;
		border-radius: 15%;
		background-color: rgb(98, 227, 234);
	}
</style>