const express = require('express');
const app = express();
app.get('/server', (request, response) => {
    // 設置響應頭 設置允許跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 設置響應體
    response.send('Hello AJAX!');
});
app.listen(8000, () => {
    console.log('服務已啟動，8000端口監聽中...');
});