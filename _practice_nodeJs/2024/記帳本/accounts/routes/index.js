var express = require('express');
var router = express.Router();

// 導入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../data/db.json');
const db = low(adapter);

// 導入shortid
const shortId = require('shortid');

/**記帳列表 */
router.get('/account', function (req, res, next) {
  res.render('list');
});
/**添加列表 */
router.get('/account/create', function (req, res, next) {
  res.render('create');
});
/**添加紀錄 */
router.post('/account', (req, res) => {
  // 生成ID
  let id = shortId.generate();
  // 獲取請求紀錄
  console.log(req.body);
  // 寫入文件
  db.get('accounts').unshift({ id: id, ...req.body }).write();

  res.render('success', { msg: '添加成功！', url: '/account' });
})
module.exports = router;
