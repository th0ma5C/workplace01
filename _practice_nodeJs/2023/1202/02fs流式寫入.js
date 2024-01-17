/**
 * 需求:觀書有感txt
 */

const fs = require('fs');

// 創建流式寫入對象
const ws = fs.createWriteStream('./流式寫入測試.txt');

// write
ws.write('123\r\n');
ws.write('123\r\n');
ws.write('123\r\n');
ws.write('123\r\n');

//關閉通道 兩種方式
ws.end();
// ws.close();
// const rs = fs.createReadStream('file.txt');

// rs.on('error', err => {
//     console.error(err);
// });

// rs.on('close', () => {
//     console.log('File has been read and stream has been closed.');
// });
