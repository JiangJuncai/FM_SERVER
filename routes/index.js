const staff = require('./api/staff');

module.exports = app => {
    app.use('v0/staff', staff);
};
