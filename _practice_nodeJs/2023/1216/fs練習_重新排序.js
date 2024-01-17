const fs = require('fs');


let fileArr = fs.readdirSync('./新資料夾缺02');
// let fileNum = fileArr.map(el => parseInt(el, 10));

// for(let i = 1;i <= fileNum.length +1; i++){
//     if(!fileNum.includes(i)){
//         fileNum.push(i);
//     }
// }

// fileNum.sort((a,b)=>a-b);

// fileNum.forEach(item=>{
//     fs.
// })

// console.log(fileArr.length)
//#region 
// fs.mkdir('./新資料夾缺02/重新排序', err => {
//     if (err) {
//         console.log('創建資料夾失敗');
//         return;
//     }
//     console.log('資料夾創建成功');
// })
//#endregion

if (!fs.existsSync(`./新資料夾缺02/重新排序`)) {
    fs.mkdirSync(`./新資料夾缺02/重新排序`);
    console.log('重新排序資料夾創建成功');
}

for (let i = 0; i < (fileArr.length) - 1; i++) {
    fs.renameSync(`./新資料夾缺02/${fileArr[i]}`, `./新資料夾缺02/重新排序/${i + 1}.js`)
}