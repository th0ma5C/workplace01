/**
 * 需求:讀取檔案至內存
 */
const fs = require('fs');

//創建取流對象
const rs = fs.createReadStream('./000028220035.jpg');

//綁定data事件
rs.on('data', chunk => {
    console.log(chunk.length); //65536字節 => 64 KB
})

// end 可選事件
rs.on('end', () => {
    console.log('讀取完成');
})