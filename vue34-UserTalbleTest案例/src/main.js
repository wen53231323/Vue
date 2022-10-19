import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 完整引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Loading } from 'element-ui'
// 阻止启动生产消息
Vue.config.productionTip = false
Vue.use(ElementUI)

// 声明格式化时间的 全局过滤器
Vue.filter('dateFormat', dtStr => {
  const dt = new Date(dtStr)// 日期对象
  const y = dt.getFullYear();// 年
  const m = padZero(dt.getMonth() + 1);// 月
  const d = padZero(dt.getDate());// 日
  const hh = padZero(dt.getHours());// 时
  const mm = padZero(dt.getMinutes());// 分
  const ss = padZero(dt.getSeconds());// 秒
  // 返回模板字符串
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

// 补零的函数
function padZero(n) {
  return n > 9 ? n : '0' + n
}

// 全局配置axios请求根路径
// axios.defaults.baseURL = 'https://www.escook.cn'
axios.defaults.baseURL = 'http://localhost:8888'
// 在全局配置 axios
Vue.prototype.$http = axios

// 声明请求拦截器
let loadingInstance = null
axios.interceptors.request.use(config => {
  // 展示 Loading 效果
  loadingInstance = Loading.service({ fullscreen: true })
  return config
})

// 声明响应拦截器
axios.interceptors.response.use(response => {
  // 隐藏 Loading 效果
  loadingInstance.close()
  return response
})

new Vue({
  // 挂载路由
  router,
  render: h => h(App),
}).$mount('#app')
