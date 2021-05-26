<template> 
<div>
  <h1>your cart Items</h1>
  <div  v-for="cartproduct in cartProducts" :key="cartproduct.id">
        <CartProducts :cartProduct="cartproduct"/>

  </div>
</div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
import CartProducts from "./CartProducts"
export default{
    name:'ShowCarts',
    components: {
    CartProducts
  },
   created() {
      console.log("hiiiii")
     
    this.$store.dispatch("getCarts");
     console.log(this.$store.state.cartProducts)
   
  },
    computed:{
        ...mapGetters(["cartProducts"])
    },
    methods:{
        ...mapActions(["getCarts"])
    }

}

</script>
