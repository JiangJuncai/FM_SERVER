const dev = {
    HOSTPORT: 3000,
    MYSQL_URI: 'mysql://root:111111@localhost:3306/fundManageDev'
};

const prod = {
    HOSTPORT: 4000,
    MYSQL_URI: 'mysql://root:111111@localhost:3306/fundManage'
};

module.exports = process.env.NODE_ENV === 'development' ? dev : prod;
