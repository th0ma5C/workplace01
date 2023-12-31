const express = require('express');
const { json } = require('express/lib/response');
const app = express();
app.get('/server', (request, response) => {
    // 設置響應頭 設置允許跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 設置響應體
    response.send('Hello AJAX with get!!!');
});
app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello AJAX with post!');
});
// all表示任意類型的請求方式
app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 使header可接收自定義請求頭
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'google',
    }
    // 需要進行字符串轉換才能發送
    // let str = JSON.stringify(data);
    // response.send(str);
    // 使用express的json方法
    response.json(data);
});
// 延時響應
app.all('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        msg: '延時響應',
    }
    setTimeout(() => {
        response.json(data);
    }, 3000);
});
// jQuery AJAX
app.all('/jquery-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        msg: '使用jQuery請求',
    }
    response.json(data);
});
// axios服務
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        msg: '使用axios請求',
    }
    response.json(data);
});
// fetch
app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        msg: '使用fetch請求',
    }
    response.json(data);
});
app.listen(8000, () => {
    console.log('服務已啟動，8000端口監聽中...');
});