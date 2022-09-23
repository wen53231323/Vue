// 导入vue包，得到Vue构造函数
import Vue from 'vue'
// 导入App.vue根组件，将来把App.vue中的模板结构，渲染到Html页面中
import App from './App.vue'

// 导入需要全局注册的组件
import common from '@/components/Common.vue'
// 初始化Vue前全局注册组件，Vue.component("注册名",组件)
Vue.component("my-common", common)

// 阻止启动生产消息
Vue.config.productionTip = false

// 创建Vue的实例对象
new Vue({
	// el用于指定当前vue实例为哪个容器服务
	el: '#app',
	// render用于指定组件，渲染到Html页面中
	render: function (h) {
		// h(组件名称)
		return h(App)
	}
})


