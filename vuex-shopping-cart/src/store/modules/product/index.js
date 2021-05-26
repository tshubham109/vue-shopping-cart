import axios from 'axios';
const state = {
  productItems: []
}
const mutations = {
    UPDATE_PRODUCT_ITEMS (state, payload) {
      state.productItems = payload;
    },
    addNewProduct(state,newproduct){
      state.productItems.push(newproduct);
    }
  }
  const actions = {
    getProductItems ({ commit }) {
      axios.get('/api/allproduct').then((response) => {
        console.log("yes..")
        commit('UPDATE_PRODUCT_ITEMS', response.data)
      });
    },
    addProduct ({ commit }, product) {
      axios.post(`/api/addproduct`, product).then((response) => {
        console.log("data added")
        commit('addNewProduct', response.data)
      }).catch(console.log("err"));
    },
  }
  const getters = {
    productItems: state => state.productItems,
    productItemById: (state) => (id) => {
      return state.productItems.find(productItem => productItem.id === id)
    }
  }

  const productModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default productModule;