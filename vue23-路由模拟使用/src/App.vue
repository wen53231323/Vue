<template>
	<div>
		<div class="app-box">
			<!-- 使用子组件，不允许有大写字母，可能会出错 -->
			<div>根组件App.vue</div>
			<a href="#/home">首页</a>
			<a href="#/move">电影</a>
			<a href="#/music">音乐</a>
		</div>
		<!-- 通过vue内置的<component>组件中的is属性，使用v-bind绑定is属性，实现动态切换组件 -->
		<component :is="ComponentName"></component>
	</div>
</template>

<!-- script里定义js行为或导入文件 -->
<script>
	// 默认导入
	import home from "@/components/Home.vue";
	import move from "@/components/Move.vue";
	import music from "@/components/Music.vue";
	// 默认导出，向其他模块共享成员（仅允许使用一次）
	export default {
		// 组件名称
		name: "App",
		// components用于注册组件
		components: {
			"my-home": home,
			"my-move": move,
			"my-music": music,
		},
		// data用于定义数据模型，数据提供给el指定的容器使用（组件中的data不能指向对象，必须是函数）
		data: function () {
			// 返回数据对象
			return {
				// 在动态组件的位置，要展示的组件的名字，值必须是字符串
				ComponentName: "my-home",
			};
		},
		// 声明周期创建后
		created() {
			// 只要当前的 App 组件一被创建，就立即监听 window 对象的 onhashchange 事件(当锚部分发生变化时执行)
			window.onhashchange = () => {
				// location.hash用来获得锚链接
				console.log("监听到了 hash 地址的变化", location.hash);
				switch (location.hash) {
					case "#/home":
						this.ComponentName = "my-home";
						break;
					case "#/move":
						this.ComponentName = "my-move";
						break;
					case "#/music":
						this.ComponentName = "my-music";
						break;
				}
			};
		},
	};
</script>

<!-- style标签里定义less样式 -->
<style lang="less">
	.app-box {
		display: flex; // 父元素设置flex属性
		margin: auto; // 外边距
		padding: 10px; // 内边距
		text-align: center; // 文本水平居中
		justify-content: center; // 水平主轴居中
		align-items: center; // 垂直交叉轴居中
		justify-content: space-around; // 整体居中
		background-color: rgb(125, 232, 68); // 背景色
	}
</style>
