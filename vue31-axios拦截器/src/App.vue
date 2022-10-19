<template>
	<el-row class="mb-4">
		<el-button type="primary" @click="getInfo" plain>按钮</el-button>
		<el-button type="success" plain>Success</el-button>
	</el-row>
</template>

<script>
	import HelloWorld from "./components/HelloWorld.vue";

	export default {
		name: "App",
		methods: {
			async getInfo() {
				// 使用解构赋值，从axios中封装的大对象中，把data属性解构出来，然后使用冒号:进行重命名
				const { data: response } = await this.$http.get(
					" http://localhost:8080/axios",
					{
						params: {
							name: "zhangsan",
							password: 123456,
						},
					}
				);
			},
		},
	};
</script>
