const Sequelize=require('sequelize');
const db=require('../database');

const Product=db.define('product',{

    title:{
        type: Sequelize.STRING,
     }
     ,
     description:{
        type: Sequelize.STRING,
     },
     price:{
        type: Sequelize.STRING,
     },
     owner:{
        type: Sequelize.STRING,
     },
     cartId:{
        type:Sequelize.INTEGER
     }

})

module.exports=Product