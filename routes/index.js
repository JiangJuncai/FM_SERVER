const staff = require('./api/staff');

module.exports = app => {
    app.use('/staff', staff);
};
