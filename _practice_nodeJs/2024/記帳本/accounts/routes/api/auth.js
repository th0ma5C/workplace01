var express = require('express');
var router = express.Router();

const UserModel = require('../../models/userModel');
const md5 = require('md5');
const jwt = require('jsonwebtoken');


// 登入
router.post('/login', async (req, res) => {
    let { username, password } = req.body;
    try {
        let data = await UserModel.findOne({
            username,
            password: md5(password)
        });
        if (!data) return res.json({
            code: "2002",
            msg: '帳號或密碼錯誤',
            data: null
        });

        // 創建token
        let token = jwt.sign({
            username: data.username,
            _id: data._id,
        }, 'test', {
            expiresIn: 60 * 60 * 24 * 7
        })

        // 響應token
        res.json({
            code: '0000',
            msg: '登入成功',
            data: token
        })
    } catch (error) {
        res.status(500).json({
            code: '2001',
            msg: '數據庫讀取失敗',
            data: null
        });
    }
})

// 登出
router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.render('success', {
            msg: '登出成功',
            url: '/login'
        })
    })
})


module.exports = router;
