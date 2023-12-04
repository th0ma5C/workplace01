const fs = require('fs');
const process = require('process');

//方式一 readFile 全部讀入內存再一次寫入
//讀取內容
let data = fs.readFileSync('../1203/veg_bgIMG.jpg');
//寫入文件
fs.writeFileSync('./複製的圖片.jpg', data);
console.log(process.memoryUsage()); //rss: 31031296

//方式二 流式操作 所需內存空間較少(64KB)
//創建讀取流對象
const rs = fs.createReadStream('../1203/veg_bgIMG.jpg');
//創建寫入流對象
const ws = fs.createWriteStream('./複製的圖片二.jpg');
//綁定data事件
rs.on('data', chunk => {
    ws.write(chunk);
})
rs.on('end', () => {
    console.log(process.memoryUsage());//rss: 31387648
})
//流式簡寫
rs.pipe(ws);