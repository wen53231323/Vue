import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// 导入axios
import axios from 'axios'

// 调用createApp函数，创建SPA实例
const app = createApp(App)

// 给 axios 设置请求根路径
axios.defaults.baseURL = "http://localhost:3000"

// 添加request请求拦截器（Token 认证案例）
axios.interceptors.request.use(
    // 成功的回调
    config => {
        // 判断是否存在 token,
        if (store.state.token) {
            // 如果存在的话, 则每个 http header 都加上 token
            config.headers.Authorization = `token ${store.state.token}`;
        }
        // 在发送请求之前进行操作
        return config;
    },
    // 失败的回调
    err => {
        // 对请求错误进行操作
        return Promise.reject(err);
    }
);

// 按需导入Loading效果组件
import element from 'element-plus'
import '../node_modules/element-plus/dist/index.css'

app.use(element)
// 声明变量存储Loading组件的实例对象
let loadingInstance = null

// 添加request请求拦截器（展示 Loading 加载效果）
axios.interceptors.request.use(
    // 成功的回调
    config => {
        // 调用Loading组件的service()方法，创建Loading组件的实例，并全屏展示Loading效果
        loadingInstance = Loading.service({ fullscreen: true })
        // 在发送请求之前进行操作
        return config;
    },
    // 失败的回调
    err => {
        // 对请求错误进行操作
        return Promise.reject(err);
    }
);

// 添加response响应拦截器（关闭 Loading 效果）
axios.interceptors.response.use(
    response => {
        // 调用Loading实例的close()方法关闭Loading效果
        loadingInstance.close()
        // 对响应数据进行操作
        return response;
    },
    error => {
        // 对响应错误进行操作，返回接口返回的错误信息
        return Promise.reject(error.response.data)
    }
);

// 添加response响应拦截器（错误码案例）
axios.interceptors.response.use(
    response => {
        // 对响应数据进行操作
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除 token 信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
            }
        }
        // 对响应错误进行操作，返回接口返回的错误信息
        return Promise.reject(error.response.data)
    }
);


// 全局挂载 axios
app.config.globalProperties.$http = axios

// 调用mount()方法把App组件的模板结构，渲染到指定的el区域中
app.mount('#app')
// 或者简写为
// createApp(App).mount('#app')
