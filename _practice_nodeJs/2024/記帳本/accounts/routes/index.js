var express = require('express');
var router = express.Router();

/* 記帳列表 */
router.get('/account', function (req, res, next) {
  res.render('list')
});
/* 添加列表 */
router.get('/account/create', function (req, res, next) {
  res.send('添加紀錄');
});

module.exports = router;
