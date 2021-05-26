const sequelize=require("./database")
sequelize.sync({}).then(()=>console.log("db is ready"))


const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
//const Products=require("./models/products");
const Product = require("./models/products");
const CartItem = require("./models/cart");
const User = require("./models/user");


const app = express();
const PRODUCT_DATA_FILE = path.join(__dirname, 'server-product-data.json');
const CART_DATA_FILE = path.join(__dirname, 'server-cart-data.json');

app.set('port', (process.env.PORT || 3000));

app.use('/api',require('./routes/products'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.json());

CartItem.hasMany(Product,{
});
Product.belongsTo(CartItem,{
})

User.hasMany(CartItem)
CartItem.belongsTo(User)


//api for user SignUp
app.post('/signup',(req,res)=>{
  console.log(req.body)
  User.create(req.body).then((response)=>res.send(response)).catch(err=>console.log("err: ",err))
})
//api for signin
app.post('/signin',(req,res)=>{
  console.log(req.body)
User.findOne({ where: { username: req.body.username }}).then((user)=>{
  console.log(user)
  if(user===null)
  res.send("signup first!!")
  else if( (user.password===req.body.password))
  res.send(user)
 
}
).catch(err=>console.log("something wrong !!"))
}
)




app.post('/addproduct',async(req,res)=>{
 
  // if(req.body.id!==null)
    console.log((req.body))
    Product.create(req.body).then(product=>res.send(product)).catch(err=>console.log(err));
   
 }
 )
 app.get('/allcartitems/:userId',(req,res)=>{
   console.log("api hit ")

   console.log(req.params.userId)
   CartItem.findAll({ where: { userId: req.params.userId }, include :[Product]}).then(products=>{
     const arr=[]
    const result= products.map((item)=>arr.concat(item.products))
    res.send(result);
  })
     .catch(err=>res.send(`error occured : ${err.message}`));
 })
//  app.get('/allcartitems',(req,res)=>{
//   console.log("api hit ")
//   User.findAll({include :[CartItem]}).then(products=>res.send(products)).catch(err=>res.send(`error occured : ${err.message}`));
// })

 app.post('/addtocart',(req,res)=>{
    console.log(req.body[0]);

    CartItem.create(({userId:req.body[0]})).then(cart=>{
      console.log(cart.id)
      req.body[1].map(product=>{
        console.log(product)
        Product.create({title:product.title,cartId:cart.id,
          name:product.name,
        description:product.description})
      }
        
       )


      res.send(cart)}
    ).catch(err=>console.log(err));
   
 }
 )
 app.get('/allproduct',(req,res)=>{
   Product.findAll().then(products=>res.send(JSON.stringify(products))).catch(err=>res.send(`error occured : ${err.message}`));
 })
 app.delete('/deletecartitem',(req,res)=>{
  CartItem.destroy({
    where: {
        id:req.body.id
    }
  }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
   if(rowDeleted === 1){
      console.log('Deleted successfully');
      res.send("deleted successfully!")
    }
  }, function(err){
     console.log(err); 
  });
 })

app.delete('/deletecarts',(req,res)=>{
  console.log("yyaa")
//   CartItem.findAll({where:{}}).then((cartIds)=>{
//     if (cartIds.length === 0) 
//     return Promise.resolve(true) //nothing to delete
//  return CartItem.destroy({where: {id: {$in: cartIds}}});
//   })})
  CartItem.destroy({
    truncate:true,
    cascade:true,
    force:true
    
   
   
  }).then(()=>res.send("deleted")).catch(err=>console.log(err))
 
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});
//app.use('/api',require('./routes/products'))




app.listen(app.get('port'), () => {
    
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
