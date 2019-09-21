const express = require('express');
const bcrypt = require('bcrypt');
const Staff = require('../../models/Staff');

const router = express.Router();

/**
 * @route post v0/login
 * @desc login api
 * @body username,password
 * @return staffs {Array}
 * @access public
 */
router.post('/', async (req, res) => {
    try {
        const staff = await Staff.findOne({
            where: {
                name: req.body.name
            }
        });
        if (!staff) {
            return res.json({
                code: 0,
                msg: '该用户不存在！'
            });
        }
        const result = await bcrypt.compareSync(req.body.password, staff.password);
        if (result) {
            delete staff.dataValues.password;
            res.json({
                code: 1,
                data: staff,
                msg: '登录成功！'
            });
        } else {
            res.json({
                code: 0,
                msg: '密码输入错误！'
            });
        }
    } catch (e) {
        res.json({
            code: 0,
            error: e,
            msg: e.name
        });
    }
});

module.exports = router;
