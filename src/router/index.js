import Vue from 'vue'
import Router from 'vue-router'
import Good from '../components/good/goods.vue'
import Ratings from '../components/ratings/ratings.vue'
import Seller from '../components/seller/seller.vue'
import '../common/stylus/index.styl'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/goods'
    },
    {
      path:'/goods',
      component:Good
    },
    {
      path:'/ratings',
      component:Ratings
    },
    {
      path:'/seller',
      component:Seller
    },
  ]
})
