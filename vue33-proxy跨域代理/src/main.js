import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// 导入axios
import axios from 'axios'

// 调用createApp函数，创建SPA实例
const app = createApp(App)

// 给 axios 设置请求根路径
axios.defaults.baseURL = "http://localhost:8080"
// 全局挂载 axios
app.config.globalProperties.$http = axios

// 调用mount()方法把App组件的模板结构，渲染到指定的el区域中
app.mount('#app')
// 或者简写为
// createApp(App).mount('#app')