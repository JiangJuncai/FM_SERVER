/**
 * connect to mysql
 **/
const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.MYSQL_URI);
const Model = sequelize.Model;

module.exports = {
    sequelize,
    Model
};