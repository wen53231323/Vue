<template>
	<div>
		<div class="app-box">
			<!-- 使用子组件，不允许有大写字母，可能会出错 -->
			<div>根组件App.vue</div>
			<!-- 在 hash 地址中， / 后面的参数项，叫做 路径参数 ? 后面的参数项，叫做 查询参数 -->
			<!-- 在路由 参数对象中，需要使用 this.$route.params 来访问路径参数，使用 this.$route.query 来访问查询参数 -->
			<!-- 在 this.$route 中，path 只是路径部分；fullPath 是完整的地址 -->
			<!-- /movie/2?name=zs&age=20 是 fullPath 的值，/movie/2 是 path 的值  -->

			<router-link to="/move/1">电影1</router-link>
			<!-- Get请求：跳转并携带query参数，to的字符串写法 -->
			<router-link :to="`/move/1?name='hello'`">电影1</router-link>
			<!-- Get请求：跳转并携带query参数，to的字符串写法 -->
			<router-link :to="{
				path:'/move/1',
				query:{
   		  			id:1,
          			title:'hello'
   				}
   			}">电影1</router-link>

			<br>

		</div>
		<div class="app-box">
			<button @click="getMove2">电影2</button>
			<button @click="getMove3">电影3</button>

			<br>

			<button @click="goforward">前进一页</button>
			<button @click="gobehind">后退一页</button>

			<br>

			<button @click="goforwardNew">前进一页</button>
			<button @click="gobehindNew">后退一页</button>
		</div>
		<!-- 当安装和配置了 vue-router 后，可以使用 router-view 组件，作用是组件的占位符（动态切换组件） -->
		<router-view></router-view>
	</div>
</template>

<!-- script里定义js行为或导入文件 -->
<script>
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		// 组件名称
		name: "App",
		methods: {
			getMove2() {
				// 跳转到指定 hash 地址，并增加一条历史记录
				this.$router.push("/move/2");
			},
			getMove3() {
				// 跳转到指定的 hash 地址，并替换掉当前的历史记录
				this.$router.replace("/move/3");
			},
			goforward() {
				// 实现导航历史前进、后退（层级超过上限则）
				this.$router.go(1);
			},
			gobehind() {
				// 实现导航历史前进、后退
				this.$router.go(-1);
			},
			goforwardNew() {
				this.$router.forward();
			},
			gobehindNew() {
				this.$router.back();
			},
		},
	};
</script>

<!-- style标签里定义less样式 -->
<style lang="less">
	.app-box {
		display: flex; // 父元素设置flex属性
		margin: 10px; // 外边距
		padding: 10px; // 内边距
		text-align: center; // 文本水平居中
		justify-content: center; // 水平主轴居中
		align-items: center; // 垂直交叉轴居中
		justify-content: space-around; // 整体居中
		background-color: rgb(125, 232, 68); // 背景色
	}
</style>
