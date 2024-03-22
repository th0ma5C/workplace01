var express = require('express');
var router = express.Router();

const UserModel = require('../../models/userModel');
const md5 = require('md5')

// 註冊頁面
router.get('/reg', (req, res) => {
    res.render('reg');
})

router.post('/reg', async (req, res) => {
    try {
        await UserModel.create({
            ...req.body,
            password: md5(req.body.password)
        });
        res.render('success', {
            msg: '註冊成功',
            url: '/login'
        })
    }
    catch (error) {
        res.status(500).send('註冊失敗');
    }
})
// 登入頁面
router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', async (req, res) => {
    let { username, password } = req.body;
    try {
        let data = await UserModel.findOne({
            username,
            password: md5(password)
        });
        if (!data) return res.send('帳號或密碼錯誤');

        req.session.username = data.username;
        req.session._id = data._id;

        res.render('success', {
            msg: '登入成功',
            url: '/account'
        })
    } catch (error) {
        res.status(500).send('登入失敗');
    }
})

// 登出
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.render('success', {
            msg: '登出成功',
            url: '/login'
        })
    })
})


module.exports = router;
