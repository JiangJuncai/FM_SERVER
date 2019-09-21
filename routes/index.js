const staff = require('./api/staff');
const login = require('./api/login');

module.exports = app => {
    app.use('/v0/staff', staff);
    app.use('/v0/login', login);
};
