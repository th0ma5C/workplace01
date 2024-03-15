var express = require('express');
var router = express.Router();

// 導入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../data/db.json');
const db = low(adapter);

// 導入shortid
// const shortId = require('shortid');
// 導入moment
const moment = require('moment');
const AccountModel = require('../models/accountModel');

/**記帳列表 */
router.get('/account', function (req, res, next) {
  // 獲取帳單數據
  let accounts = db.get('accounts').value();

  res.render('list', { accounts });
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
router.get('/account/:id', (req, res) => {
  // 獲取ID
  let id = req.params.id;
  // 刪除ID
  db.get('accounts').remove({ id }).write();
  // 提示
  res.render('success', { msg: '刪除成功！', url: '/account' })
})

module.exports = router;
