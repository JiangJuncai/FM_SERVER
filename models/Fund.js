const Sequelize = require('sequelize');
const sequelize = require('./db');

class Fund extends Sequelize.Model {}
Fund.init(
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            unique: true,
            defaultValue: Sequelize.UUIDV1
        },
        income: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        foods_expend: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        frozen_expend: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        other_expend: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize,
        modelName: 'funds'
    }
);

module.exports = Fund;
