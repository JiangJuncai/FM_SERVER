const Sequelize = require('sequelize');
const sequelize = require('./db');
const Staff = require('./Staff');
const Info = require('./Info');
const Fund = require('./Fund');

class Daily extends Sequelize.Model {}
Daily.init(
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            unique: true,
            defaultValue: Sequelize.UUIDV1
        },
        recode_date: {
            type: Sequelize.DATE,
            unique: true,
            defaultValue: Sequelize.NOW,
            validate: {
                isBefore: Sequelize.NOW
            }
        },
        staff_id: {
            type: Sequelize.UUID,
            references: {
                model: Staff,
                key: 'id'
            }
        },
        info_id: {
            type: Sequelize.UUID,
            references: {
                model: Info,
                key: 'id'
            }
        },
        fund_id: {
            type: Sequelize.UUID,
            references: {
                model: Fund,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'daily_data'
    }
);

module.exports = Daily;
