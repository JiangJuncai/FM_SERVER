/**
 * connect to mysql
 **/
const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.MYSQL_URI, {
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    }
});

module.exports = sequelize;
