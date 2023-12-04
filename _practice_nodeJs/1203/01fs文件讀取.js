const fs = require('fs');

//異步讀取
// fs.readFile('../1202/流式寫入測試.txt', (err, data) => {
//     if (err) {
//         console.log('讀取失敗');
//         return
//     }
//     console.log(data.toString()); //toString()轉為utf-8編碼
// })

//同步讀取
let data = fs.readFileSync('../1202/流式寫入測試.txt');
console.log(data.toString());