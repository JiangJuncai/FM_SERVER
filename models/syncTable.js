const User = require('./Staff');
const Staff = require('./Staff');
const Info = require('./Info');
const Fund = require('./Fund');
const Daily = require('./Daily');

User.sync({ force: true });
Staff.sync({ force: true });
Info.sync({ force: true });
Fund.sync({ force: true });
Daily.sync({ force: true });
