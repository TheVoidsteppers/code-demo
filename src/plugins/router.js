import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router'

Vue.use(VueRouter)

// 解决 vue-router 在 3.0 版本以上重复点菜单报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

let routerInstance = new VueRouter({
  mode: 'history',
  routes: router
})

export default routerInstance
