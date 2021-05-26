import axios from 'axios';
const state = {
  cartItems: [],
  cartProducts:[]
}
const mutations = {
    UPDATE_CART_ITEMS (state, payload) {
      state.cartItems = payload;
    },
    addNewCartItem(state,newItem){
      state.cartItems.push(newItem);
    },
    UPDATE_CART_PRODUCTS(state,cartProducts){
     
      state.cartProducts=cartProducts;
      console.log("cart Item of user",state.cartProducts)
    }
  }

  const actions = {
    getCartItems ({ commit }) {
      axios.get('/api/allcartitems').then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    },
    addCartItem ({ commit }, cartItem) {
     
        commit('addNewCartItem',cartItem)

    },
    doCheckOut({ commit,state },user) {
      console.log(state.user);
      console.log(user)
      axios.post('/api/addtocart', ([user,state.cartItems])).then((response) => {
        commit('UPDATE_CART_ITEMS', [])
      });
    },
    removeCartItem ({ commit }, cartItem) {
      axios.delete('/api/cart/delete', cartItem).then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    },
    removeAllCartItems ({ commit }) {
      axios.delete('/api/deletecarts').then((response) => {
        commit('UPDATE_CART_ITEMS', response.data)
      });
    },
    getCarts({ commit ,rootState}){
      const userId=rootState.signin.user?rootState.signin.user.id:""
      console.log("cart of user ",userId)
      axios.get(`/api/allcartitems/${userId}`).then((response)=>{
        console.log(response.data)
        commit('UPDATE_CART_PRODUCTS',response.data);
      })
    }
  }
  const getters = {
    cartProducts:state=>state.cartProducts,
    cartItems: state => state.cartItems,
    cartTotal: state => {
      return state.cartItems.reduce((acc, cartItem) => {
        return (cartItem.quantity * cartItem.price) + acc;
      }, 0).toFixed(2);
    },
    cartQuantity: state => {
      return state.cartItems.reduce((acc, cartItem) => {
        return cartItem.quantity + acc;
      }, 0);
    }
  }

  const cartModule = {
    state,
    mutations,
    actions,
    getters
  }
  export default cartModule;