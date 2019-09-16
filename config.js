const dev = {
    HOSTPORT: 3000,
    MYSQL: {
        host: 'localhost',
        user: 'root',
        password: '111111',
        database: 'fundManage',
        port: 3306
    }
};

const prod = {
    HOSTPORT: 4000,
    MYSQL: {
        host: 'localhost',
        user: 'root',
        password: '111111',
        database: 'fund',
        port: 3306
    }
};

module.exports = process.env.NODE_ENV === 'development' ? dev : prod;
