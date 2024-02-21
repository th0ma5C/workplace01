const express = require('express');
const path = require('path');
const app = express();

// 設置模板引擎
app.set('view engine', 'ejs');
// 設置具有模板文件的存放位置
app.set('views', path.resolve(__dirname, './views'));

app.get('/', (req, res) => {
    // 聲明變量
    let title = 'ABCDEFG';
    res.render('', { title })
})

app.listen(3000, () => {
    console.log('服務啟動，3000端口監聽中');
})