const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lab-lis','root','',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;
