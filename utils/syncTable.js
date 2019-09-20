const Staff = require('../models/Staff');
const Info = require('../models/Info');
const Fund = require('../models/Fund');
const Daily = require('../models/Daily');

Staff.sync({ force: true });
Info.sync({ force: true });
Fund.sync({ force: true });
Daily.sync({ force: true });
