const http = require('http');

const server = http.createServer((request, response) => {
    let { method } = request;
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    response.setHeader('content-type', 'text/html;charset=utf-8')
    if (method === 'GET' && pathname === '/login') {
        response.end('登入頁面');
    } else if (method === 'GET' && pathname === '/reg') {
        response.end('註冊頁面');
    } else {
        response.end('Not found...');
    }
});

server.listen(9000, () => {
    console.log('服務已啟動，9000端口監聽中...');
})