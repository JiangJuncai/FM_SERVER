/**
 * connect to mysql
 **/
const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.MYSQL_URI, {
    pool: config.SEQUELIZE_POOL,
    define: config.SEQUELIZE_DEFINE
});

module.exports = sequelize;
