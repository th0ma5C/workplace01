/*
需求
新建一個檔案:座右銘.txt，內容:三人行，則必有我師焉
*/

// 1.導入 fs 模組
const fs = require('fs');

// 2.寫入文件 異步 效率較高
fs.writeFile('./座右銘.txt', '三人行，則必有我師焉', err => {
    //err 寫入失敗: 錯誤對象 寫入成功: null
    if (err) {
        console.log('寫入失敗');
        return
    } else {
        console.log('寫入成功');
    }
});
console.log('異步');

// 3.寫入文件 同步
fs.writeFileSync('./syncTest.txt', 'testtest');
console.log('同步');
