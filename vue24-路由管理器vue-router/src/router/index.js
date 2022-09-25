// Vue Router依赖于Vue，所以需要先引入Vue，再引入Vue Router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '@/components/Home.vue'
import Move from '@/components/Move.vue'
import Music from '@/components/Music.vue'

// 调用Vue.use()函数，把VueRouter安装为Vue的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
    // routes 是一个数组，用于定义 hash地址 与 组件 之间的对应关系
    routes: [
        // 重定向的路由规则（访问根路径重定向到/home）
        { path: '/', redirect: '/home' },
        // 路由规则（给组件设置路径）
        { path: '/home', component: Home },
        { path: '/move', component: Move ,},
        { path: '/music', component: Music },
    ]
})

// 向外界共享路由的实例对象
export default router
