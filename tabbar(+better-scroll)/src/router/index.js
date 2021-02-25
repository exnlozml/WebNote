import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shop = () => import('../views/shop/Shop.vue')
const Person = () => import('../views/person/Person.vue')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/person',
    component: Person
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router