import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import ShowCarts from'../views/ShowCarts.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path:'/showCarts',
    component:ShowCarts
  }
  ,
  {
    path:'/signin',
    component:SignIn
  }
  ,
  {
    path:'/signup',
    component:SignUp
  },

  {
    path: '/inventory',
    component: ProductList
  },
  {
    path:'/',
    component:Home
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/about',
   
    component:About
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router