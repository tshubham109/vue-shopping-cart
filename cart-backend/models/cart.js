const Sequelize=require('sequelize');
const db=require('../database');
const { sequelize } = require('./products');

const CartItem=db.define('cart',{
    userId:{
        type: Sequelize.INTEGER,
     }
     
})

module.exports=CartItem;