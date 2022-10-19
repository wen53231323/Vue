// 导入vue包，得到Vue构造函数
import Vue from 'vue'
// 导入App.vue根组件，将来把App.vue中的模板结构，渲染到Html页面中
import App from './App.vue'
// 导入axios
import axios from 'axios'
// 导入路由模块
import router from "@/router"

// 全局配置axios请求根路径
axios.defaults.baseURL = "http://localhost:8080"
// 将axios挂载到Vue.prototype上,供每个组件直接使用,使用时调用 this.$http.get()
Vue.prototype.$http = axios

// 阻止启动生产消息
Vue.config.productionTip = false

// 创建Vue的实例对象
new Vue({
	// el用于指定当前vue实例为哪个容器服务
	el: '#app',
	// 挂载路由模块
	router: router,
	// render用于指定组件，渲染到Html页面中
	render: function (h) {
		// h(组件名称)
		return h(App)
	}
})
