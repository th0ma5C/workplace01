// 引入 express
const express = require('express');

// 創建應用對象
const app = express();

// 創建路由規則
// request是對請求報文的封裝
// response是對響應報文的封裝
app.get('/', (request, response) => {
    // 設置響應
    response.send('Hello Express!');
})

// 監聽端口啟動服務
app.listen(8000, () => {
    console.log('服務已啟動，8000端口監聽中');
})