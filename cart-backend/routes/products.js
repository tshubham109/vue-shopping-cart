const express=require("express")
const router=express.Router()
const Products=require("../models/products")

// const bodyParser = require("body-parser");
// router.use(bodyParser.json());
router.get("/",(req,res)=>res.send("hii"));
router.post('/addproduct',(req,res)=>{
 Products.create(JSON.stringify(req.body)).then(()=>res.send("new product added by product")).catch(err=>res.send(err));
}
)
module.exports=router;