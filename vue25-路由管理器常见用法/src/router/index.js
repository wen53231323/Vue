// Vue Router依赖于Vue，所以需要先引入Vue，再引入Vue Router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '@/components/Home.vue'
import Move from '@/components/Move.vue'
import Music from '@/components/Music.vue'
import Popular from '@/components/MusicType/Popular.vue'
import Other from '@/components/MusicType/Other.vue'
// 调用Vue.use()函数，把VueRouter安装为Vue的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
    // routes 是一个数组，用于定义 hash地址 与 组件 之间的对应关系
    routes: [
        // 重定向的路由规则（访问根路径重定向到/home）
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/move', component: Move, },
        {
            // path表示 路由规则（给组件设置路径）
            path: '/music',
            // component表示 路由规则对应要展示的组件对象
            component: Music,
            // redirect表示 重定向路由规则
            redirect: '/music/popular',
            // children表示 子路由规则
            children: [
                // 如果 children 数组中，某个路由规则的 path 值为空字符串，则这条路由规则叫做 默认子路由
                { path: '', component: Popular },
                { path: 'popular', component: Popular },
                { path: 'other', component: Other }
            ]
        },

    ]
})

// 向外界共享路由的实例对象
export default router
