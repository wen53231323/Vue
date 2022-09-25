// Vue Router依赖于Vue，所以需要先引入Vue，再引入Vue Router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Move from '@/components/Move.vue'
// 调用Vue.use()函数，把VueRouter安装为Vue的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
    // routes 是一个数组，用于定义 hash地址 与 组件 之间的对应关系
    routes: [
        {
            name: 'move',
            path: '/move/:id', // 设置动态参数
            component: Move, // 路由规则对应要展示的组件对象
            props: true // 开启 props 传参
        },
    ]
})

// 向外界共享路由的实例对象
export default router
