const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.get('token');
    if (!token) {
        return res.json({
            code: '2003',
            msg: 'token 缺失',
            data: null
        })
    }
    jwt.verify(token, 'test', (err, data) => {
        if (err) {
            return res.json({
                code: '2004',
                msg: 'token校驗失敗',
                data: null
            })
        }
        console.log(data);
        next();
    })
}