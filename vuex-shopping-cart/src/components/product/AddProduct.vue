<template>
<div  v-if="user  &&  user.role===1" class="form" >
    <h3>Add new product</h3>
    <div>

       <form  @submit.prevent="newProduct(product)">

       

        <div class="form-group">
          <h4>details of admin </h4>
          <p>{{user}}</p>
        <label for="tile">title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="product.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="product.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="description">description</label>
        <input
          type="text"
          class="form-control"
          id="owner"
          required
          v-model="product.description"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="owner">Owner</label>
        <input
          type="text"
          class="form-control"
          id="owner"
          required
          v-model="product.owner"
          name="owner"
        />
      </div>
      <p>
      
    <input type="submit" value="submit">
  </p>
    </form>
    
    </div>
   

</div>


</template>

<script>
import { mapActions ,mapGetters} from 'vuex';
export default {
  name: "AddProduct",
  data() {
    return {
      submitted:false,
      product: {
        name: "",
        title: "",
        description: "",
        price: ""
      }
    };
  },
methods:{
...mapActions(['addProduct','getProductItems']),
newProduct(product){
  this.addProduct(product);
 this.product={}
}
},
computed: {
    ...mapGetters(["user"]),
  }
};
</script>


<style scoped>

</style>