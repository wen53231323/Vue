// 按需导入createApp函数
import { createApp } from 'vue'
// 导入App.vue根组件，将来把App.vue中的模板结构，渲染到Html页面中
import App from './App.vue'
// 导入样式文件
import './index.css'

// 导入路由模块
import router from "./router.js"

// 调用createApp函数，创建SPA实例
const app = createApp(App)

// 使用app.use()挂载路由模块，app.use()用来挂载第三方的插件模块，在app.mount('#app')前引入
app.use(router)
// 调用mount()方法把App组件的模板结构，渲染到指定的el区域中
app.mount('#app')
// 或者简写为
// createApp(App).mount('#app')
