const dev = {
    HOSTPORT: 3000,
    MYSQL_URI: 'mysql://root:111111@localhost:3306/fund_dev',
    SEQUELIZE_POOL: {
        max: 10,
        min: 0,
        idle: 10000
    },
    SEQUELIZE_DEFINE: {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    },
    BCRYPT_SALT_ROUNDS: 3
};

const prod = {
    HOSTPORT: 3000,
    MYSQL_URI: 'mysql://root:111111@localhost:3306/fund_dev',
    SEQUELIZE_POOL: {
        max: 10,
        min: 0,
        idle: 10000
    },
    SEQUELIZE_DEFINE: {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    },
    BCRYPT_SALT_ROUNDS: 8
};

module.exports = process.env.NODE_ENV === 'development' ? dev : prod;
