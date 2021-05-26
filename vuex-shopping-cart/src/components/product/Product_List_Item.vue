<template>
    <div>
        <div>
        <h3>{{productItem.title}}</h3>
        <h4>{{productItem.name}}</h4>
        <span>{{productItem.description}}</span>
        <h2>{{productItem.price}}</h2>
     </div>
    <div>
        <button @click='addCartItem(productItem)'>Add to Cart</button>
    </div>
    </div>
    
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
 export default{
     props:['productItem'],
    methods: {
    ...mapActions([
      'addCartItem',
      'removeCartItem'
    ]),
  }
}
</script>

<style>
</style>