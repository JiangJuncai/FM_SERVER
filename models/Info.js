const Sequelize = require('sequelize');
const sequelize = require('./db');

class Info extends Sequelize.Model {}

Info.init(
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            unique: true,
            defaultValue: Sequelize.UUIDV1
        },
        duck_count: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        is_special: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        remake: {
            type: Sequelize.TEXT,
            validate: {
                len: [0, 100]
            }
        }
    },
    {
        sequelize,
        modelName: 'infos'
    }
);

module.exports = Info;
