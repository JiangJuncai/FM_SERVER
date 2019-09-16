const express = require('express');
const config = require('./config');

process.env.NODE_ENV = 'development';
const app = express();

const db = require('./models/db');
db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.get('/', (req, res) => {
    res.json('success')
});

app.listen(config.HOSTPORT, () => {
    console.log(`http://localhost:${config.HOSTPORT}`)
});
