<template>
    <div>
        
       
        <span v-for="product in cartProduct" :key="product.id">
                
                {{product.title}}
                {{product.description}}
           
        </span>
      <br/>
    </div>
</template>

<script>
export default{
    name:'CartProduct',
    props:["cartProduct"]

}
</script>