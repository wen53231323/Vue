import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from '@/router/pathArr.js'

// 导入需要的组件
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Users from '@/components/menus/Users.vue'
import Rights from '@/components/menus/Rights.vue'
import Goods from '@/components/menus/Goods.vue'
import Orders from '@/components/menus/Orders.vue'
import Settings from '@/components/menus/Settings.vue'
import UserDetail from '@/components/user/UserDetail.vue'

// 调用Vue.use()函数，把VueRouter安装为Vue的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    // 登录的路由规则
    { path: '/login', component: Login },
    // 后台主页的路由规则
    {
      path: '/home',
      component: Home,
      redirect: '/home/users',// 重定向
      // 子路由
      children: [
        { path: 'users', component: Users },
        { path: 'rights', component: Rights },
        { path: 'goods', component: Goods },
        { path: 'orders', component: Orders },
        { path: 'settings', component: Settings },
        // 用户详情页的路由规则
        { path: 'userinfo/:id', component: UserDetail, props: true }
      ]
    }
  ]
})

// 全局前置守卫
router.beforeEach(function (to, from, next) {
  // 判断 hash 地址是否等于pathArr.js中的路由，若等于则进行判断
  if (pathArr.indexOf(to.path) !== -1) {
    // 读取 localStorage 中的 token 值
    const token = localStorage.getItem('token')
    if (token) {
      // 如果有token，说明已经登录，执行放行 next()
      next()
    } else {
      // 没有登录，强制跳转到 /login 登录页
      next('/login')
    }
  } else {
    next()
  }
})

export default router
