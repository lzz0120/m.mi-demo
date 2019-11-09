import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cat from '../views/Cat.vue'
import User from '../views/User.vue'
import Index from '../views/Index.vue'
import Regist from '../views/Regist.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
		meta:{
			show:true
		}
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist,
  		meta:{
  			show:true
  		}
  },
  {
    path: '/cat',
    name: 'cat',
    component: Cat,
  		meta:{
  			show:true
  		}
  },
  {
    path: '/index',
    name: 'index',
    component:Index,
  		meta:{
  			show:true
  		}
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  		meta:{
  			show:true
  		}
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/classify',
    name: 'classify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Classify.vue'),
	meta:{
		show:true
	},
  }
]

const router = new VueRouter({
  routes
})

export default router
