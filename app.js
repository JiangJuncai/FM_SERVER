const express = require('express');
const config = require('./config');

process.env.NODE_ENV = 'development';
const app = express();

const sequelize = require('./models/db');
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const Staff = require('./models/Staff');
app.get('/create', async (req, res) => {
    try {
        await Staff.create({ name: 'lucy', gender: 'man', auth: 'admin', password: '111111' });
        res.json('success');
    } catch (e) {
        res.json(e);
    }
});

app.get('/find', async (req, res) => {
    try {
        const user = await Staff.findOne({ where: { name: 'lucy' } });
        res.json(user);
    } catch (e) {
        res.json(e);
    }
});

app.get('/update/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        await User.update({ name: 'jack' }, { where: { id: req.params.id } });
        res.json('success');
    } catch (e) {
        res.json(e.name);
    }
});

app.listen(config.HOSTPORT, () => {
    console.log(`http://localhost:${config.HOSTPORT}`);
});
