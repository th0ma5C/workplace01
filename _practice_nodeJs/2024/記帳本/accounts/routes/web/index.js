const express = require('express');
// 導入moment
const moment = require('moment');
const AccountModel = require('../../models/accountModel');
// 導入checkLogin
const checkLogin = require('../../middlewares/checkLogin');

// 導入lowdb
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync(__dirname + '/../data/db.json');
// const db = low(adapter);

// 導入shortid
// const shortId = require('shortid');

// 創建路由
const router = express.Router();

// 首頁路由規則
router.get('/', (req, res) => {
  // 重定向
  res.redirect('/account');
})


/**記帳列表 */
router.get('/account', checkLogin, async (req, res, next) => {
  try {
    // 獲取帳單數據
    // let accounts = db.get('accounts').value();
    // 讀取集合數據
    const accounts = await AccountModel.find().sort({ time: -1 }).exec();
    res.render('list', { accounts: accounts, moment });
  }
  catch (err) {
    res.status(500).send('讀取失敗');
  }
});

/**添加列表 */
router.get('/account/create', function (req, res, next) {
  res.render('create');
});

/**添加紀錄 */
router.post('/account', async (req, res) => {
  // 獲取請求紀錄
  // console.log(req.body);
  // 寫入文件
  try {
    await AccountModel.create({
      ...req.body,
      time: moment(req.body.time).toDate()
    });
    res.render('success', { msg: '添加成功！', url: '/account' });
  } catch (error) {
    res.status(500).send('插入失敗');
  }
})

/**刪除紀錄 */
router.get('/account/:id', async (req, res) => {
  // 獲取ID
  let id = req.params.id;
  // 刪除ID
  try {
    await AccountModel.deleteOne({ _id: id });
    // 提示
    res.render('success', { msg: '刪除成功！', url: '/account' });
    // db.get('accounts').remove({ id }).write();
  }
  catch (err) {
    res.status(500).send('刪除失敗');
  }
})

module.exports = router;
