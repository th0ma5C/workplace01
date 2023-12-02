//引入FS
const fs = require('fs');

//調用 appendfile 異步追加寫入
fs.appendFile('../1201/座右銘.txt', '，擇期善者而為之', err => {
    if (err) {
        console.log('寫入失敗');
        return
    }
    console.log('追加寫入成功');
})

//appendFileSync 同步追加寫入 
//換行跳脫字元 '\r\n'
fs.appendFileSync('../1201/座右銘.txt', '\r\n，擇其不善者而改之')

//writeFile 實現追加寫入 需配置第三個參數 flag
fs.writeFile('../1201/座右銘.txt', '123 123 123', { flag: 'a' }, err => {
    if (err) {
        console.log('寫入失敗');
        return
    }
    console.log('追加寫入成功');
})