// 从 vue-router 中按需导入两个方法
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入需要使用路由控制的组件
import Home from './components/Home.vue'
import Move from './components/Move.vue'
import Music from './components/Music.vue'

// 创建路由的实例对象
const router = new createRouter({
    // 通过history属性指定路由的工作模式
    history: createWebHashHistory(),
    // 自定义路由链接被激活时所应用的类名
    linkActiveClass: "router-active-test",
    // routes 是一个数组，用于定义 hash地址 与 组件 之间的对应关系
    routes: [
        // 重定向的路由规则（访问根路径重定向到/home）
        { path: '/', redirect: '/home' },
        // 路由规则（给组件设置路径）
        { path: '/home', component: Home },
        { path: '/move', component: Move },
        { path: '/music', component: Music },
    ]
})

// 向外界共享路由的实例对象，供其他模块导入使用
export default router