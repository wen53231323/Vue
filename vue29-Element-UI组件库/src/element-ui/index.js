import Vue from 'vue'

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