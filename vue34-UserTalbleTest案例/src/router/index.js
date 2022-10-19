import Vue from 'vue'
// 导入路由模块
import VueRouter from 'vue-router'

// 安装路由插件
Vue.use(VueRouter)

// 导入需要的组件
import UserList from '@/components/UserList.vue'
import UserDetail from '@/components/UserDetail.vue'

const router = new VueRouter({
  // 在这里声明路由规则
  routes: [
    { path: '/', redirect: '/users' },
    { path: '/users', component: UserList },
    {
      path: '/users/:id',
      component: UserDetail,
      props: true
    },
  ],
})

// 向外共享路由实例对象
export default router
