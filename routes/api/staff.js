const Sequelize = require('sequelize');
const express = require('express');
const Staff = require('../../models/Staff');

const router = express.Router();

/**
 * $route POST staff/create
 * @desc create a staff
 * @return staff Object
 * @access public
 */
router.post('/create', async (req, res) => {
    try {
        const staff = await Staff.create(req.body);
        res.json(staff);
    } catch (e) {
        res.json(e);
    }
});

/**
 * $route get staff/all
 * @desc find all staffs
 * @return staff Array
 * @access private
 */
router.get('/all', async (req, res) => {
    try {
        const staffs = await Staff.findAll({
            order: [['enter_date', 'DESC']]
        });
        res.json(staffs);
    } catch (e) {
        res.json(e);
    }
});

/**
 * $route delete staff/:id
 * @desc delete one staff by id
 * @params id {string}
 * @return successInfo Object
 * @access private
 */
router.delete('/:id', async (req, res) => {
    try {
        await Staff.destroy({
            where: { id: req.params.id }
        });
        res.json({
            success: true,
            msg: 'delete successfully'
        });
    } catch (e) {
        res.json(e);
    }
});

/**
 * $route get staff/:id
 * @desc find one staff by id
 * @params id {string}
 * @return staff {Object}
 * @access private
 */
router.get('/:id', async (req, res) => {
    try {
        const staff = await Staff.findByPk(req.params.id);
        res.json(staff);
    } catch (e) {
        res.json(e);
    }
});

/**
 * $route get staff/:name
 * @desc find one staff by name
 * @query staff's name {String}
 * @return staffs {Array}
 * @access private
 */
router.get('/', async (req, res) => {
    try {
        const staffs = await Staff.findAll({
            where: {
                name: {
                    [Sequelize.Op.like]: `%${req.query.name}%`
                }
            },
            order: [['enter_date', 'DESC']]
        });
        res.json(staffs);
    } catch (e) {
        res.json(e);
    }
});

module.exports = router;
