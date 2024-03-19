var express = require('express');
var router = express.Router();

// 導入moment
const moment = require('moment');
const AccountModel = require('../../models/accountModel');

/**記帳列表 */
router.get('/account', async (req, res, next) => {
    try {
        // 讀取集合數據
        const accounts = await AccountModel.find().sort({ time: -1 }).exec();
        res.json({
            code: '0000',
            msg: '獲取成功',
            data: accounts,
        })
    }
    catch (err) {
        res.json({
            code: '1001',
            msg: '獲取失敗',
            data: null
        });
    }
});

/**獲取單條紀錄 */
router.get('/account/:id', async (req, res, next) => {
    let { id } = req.params
    try {
        const data = await AccountModel.findById(id);
        res.json({
            code: '0000',
            msg: '獲取成功',
            data
        })
    }
    catch (error) {
        res.json({
            code: '1004',
            msg: '獲取失敗',
            data: null
        })
    }
})

/**更新單個紀錄 */
router.patch('/account/:id', async (req, res, next) => {
    let { id } = req.params
    try {
        await AccountModel.updateOne({ _id: id }, req.body);
        const newData = await AccountModel.findById(id)
        res.json({
            code: '0000',
            msg: '更新成功',
            data: newData
        })
    }
    catch (error) {
        res.json({
            code: '1005',
            msg: '更新失敗',
            data: null
        })
    }
})



/**添加紀錄 */
router.post('/account', async (req, res) => {
    // 表單驗證
    // 寫入文件
    try {
        const newAccount = await AccountModel.create({
            ...req.body,
            time: moment(req.body.time).toDate()
        });
        res.json({
            code: '0000',
            msg: '創建成功',
            data: newAccount
        });
    } catch (error) {
        res.json({
            code: '1002',
            msg: '創建失敗',
            data: null
        });
    }
})

/**刪除紀錄 */
router.delete('/account/:id', async (req, res) => {
    // 獲取ID
    let id = req.params.id;
    // 刪除ID
    try {
        await AccountModel.deleteOne({ _id: id });
        // 提示
        res.json({
            code: '0000',
            msg: '刪除成功',
            data: null
        })
    }
    catch (err) {
        res.json({
            code: '1003',
            msg: '刪除失敗',
            data: null
        })
    }
})

module.exports = router;
