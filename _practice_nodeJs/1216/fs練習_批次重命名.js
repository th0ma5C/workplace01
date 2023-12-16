const fs = require('fs');

const files = fs.readdirSync('./新資料夾');
console.log(files)

// files.forEach(item => {
//     // 拆分檔案名
//     let data = item.split('.');
//     let [num, name] = data;
//     // 判斷
//     if (Number(num) < 10) {
//         num = '0' + num;
//     }
//     // 創建新的檔案名
//     let newName = num + '.' + name;
//     // 重命名
//     fs.renameSync(`./新資料夾/${item}`, `./新資料夾/${newName}`);
// })