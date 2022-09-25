// 导入vue包，得到Vue构造函数
import Vue from 'vue'
// 导入App.vue根组件，将来把App.vue中的模板结构，渲染到Html页面中
import App from './App.vue'
// 引入配置的element-ui模块
import './element-ui'

// 完整引入Element UI
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// 调用Vue.use()函数，把VueRouter安装为Vue的插件
// Vue.use(ElementUI);

// 按需引入Element UI
import { Button, Select } from 'element-ui';
// 调用Vue.use()函数，把VueRouter安装为Vue的插件
Vue.use(Button)
Vue.use(Select)
// 或者写为如下
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

// 阻止启动生产消息
Vue.config.productionTip = false

// 创建Vue的实例对象（方式二）
new Vue({
	// render用于指定组件，渲染到Html页面中，h(组件名称)
	render: h => h(App),
	// 用$mount('#app')替换掉el结构
}).$mount('#app')
