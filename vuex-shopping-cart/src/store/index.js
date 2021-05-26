import { createStore } from 'vuex'
import product from'./modules/product';
import cart from './modules/cart';
import signin from './modules/signin';
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,
    cart,
    signin
  }
})
