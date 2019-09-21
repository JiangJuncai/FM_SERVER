const Sequelize = require('sequelize');
const express = require('express');
const bcrypt = require('bcrypt');
const config = require('../../config');
const Staff = require('../../models/Staff');

const router = express.Router();
const BCRYPT_SALT_ROUNDS = config.BCRYPT_SALT_ROUNDS;

/**
 * $route POST staff/create
 * @desc create a staff
 * @return staff Object
 * @access public
 */
router.post('/create', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, BCRYPT_SALT_ROUNDS);
        const staff = await Staff.create(req.body);
        delete staff.dataValues.password;
        res.json({
            code: 1,
            data: staff,
            msg: '用户创建成功！'
        });
    } catch (e) {
        const errorMsg = e.errors[0].message;
        if (errorMsg === 'name must be unique') {
            res.json({
                code: 0,
                error: e,
                msg: '该用户名已存在！'
            });
        } else {
            res.json({
                code: 0,
                error: e,
                msg: e.name
            });
        }
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
            attributes: { exclude: ['password'] },
            order: [['enter_date', 'DESC']]
        });
        res.json({
            code: 1,
            data: staffs,
            msg: '获取用户列表成功！'
        });
    } catch (e) {
        res.json({
            code: 0,
            error: e,
            msg: e.name
        });
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
            code: 1,
            msg: '删除用户成功！'
        });
    } catch (e) {
        res.json({
            code: 0,
            error: e,
            msg: e.name
        });
    }
});

/**
 * $route get staff/:id
 * @desc find one staff by id
 * @param id {string}
 * @return staff {Object}
 * @access private
 */
router.get('/:id', async (req, res) => {
    try {
        const staff = await Staff.findByPk(req.params.id);
        delete staff.dataValues.password;
        res.json({
            code: 1,
            data: staff,
            msg: '查询用户成功！'
        });
    } catch (e) {
        res.json({
            code: 0,
            error: e,
            msg: e.name
        });
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
            attributes: { exclude: ['password'] },
            where: {
                name: {
                    [Sequelize.Op.like]: `%${req.query.name}%`
                }
            },
            order: [['enter_date', 'DESC']]
        });
        res.json({
            code: 1,
            data: staffs,
            msg: '查询成功！'
        });
    } catch (e) {
        res.json({
            code: 0,
            error: e,
            msg: e.name
        });
    }
});

/**
 * $route put staff/:id
 * @desc update one staff by id
 * @param id {String}
 * @return staff {Object}
 * @access private
 */
router.put('/:id', async (req, res) => {
    try {
        const staff = await Staff.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        delete staff.dataValues.password;
        res.json({
            code: 1,
            data: staff,
            msg: '修改用户信息成功！'
        });
    } catch (e) {
        res.json({
            code: 0,
            error: e,
            msg: e.name
        });
    }
});

module.exports = router;
