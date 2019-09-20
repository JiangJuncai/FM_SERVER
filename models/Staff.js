const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class Staff extends Model {}

Staff.init(
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            unique: true,
            defaultValue: Sequelize.UUIDV1
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^[a-zA-Z]\w{2,8}$/
            }
        },
        enter_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
            validate: {
                isBefore: Sequelize.NOW
            }
        },
        gender: {
            type: Sequelize.ENUM,
            values: ['man', 'woman'],
            allowNull: false
        },
        auth: {
            type: Sequelize.ENUM,
            values: ['superadmin', 'admin', 'employee'],
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'staffs'
    }
);

module.exports = Staff;
