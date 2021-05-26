const { Sequelize } = require('sequelize');
const db = new Sequelize('test-db','user','pass',{
    dialect:'sqlite',
    host:'./dev.sqlite'
})
module.exports=db;