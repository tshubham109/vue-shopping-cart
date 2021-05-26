<template >
  <div class="container">
    <router-link to='/signin'>signin</router-link>
    <router-link to='/signup'>signup</router-link>
    <router-link to='/about'>About</router-link>
    <router-link to='/'>Home</router-link>
    <router-link to='/showcarts'>Show All Carts</router-link>
    <router-view></router-view>
  <AddProduct/>
  <Product_List></Product_List>
  <Cart_List/>
  
  </div>
 
</template>

<script>

import AddProduct from './components/product/AddProduct.vue'
import Product_List from './components/product/Product_List'
import Cart_List from'./components/cart/Cart_List'
import ShowCarts from '../src/views/ShowCarts'

export default{
  name:'App',
  components:{
    AddProduct,
    Product_List,
    Cart_List,
    ShowCarts
  }
}

</script>


<style>
.container {
  max-width: 200px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px,auto;
  border-radius: 5px;
}

</style>