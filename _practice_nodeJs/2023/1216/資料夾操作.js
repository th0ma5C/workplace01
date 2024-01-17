const fs = require('fs')

// 創建文件夾 mk make 製作 dir directory 資料夾
// 1. 單一創建
// fs.mkdir('./新資料夾', err => {
//     if (err) {
//         console.log('創建失敗');
//         return
//     }
//     console.log('創建成功');
// });

// 遞迴創建 須添加第二個參數 -> recursive: true
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log('新建失敗');
//         return
//     }
//     console.log('新建成功')
// })

// 讀取資料夾 可得到目標資料夾內的名稱陣列
// fs.readdir('../', (err, data) => {
//     if (err) {
//         console.log('讀取失敗');
//         return
//     }
//     console.log(data);
// })

// 刪除單一資料夾 rm remove
// fs.rmdir('./新資料夾', err => {
//     if (err) {
//         console.log('刪除失敗');
//         return
//     }
//     console.log('刪除成功');
// })

// 遞迴刪除 rmdir將不支援，使用fs.rm替代
// fs.rmdir('./a', { recursive: true }, err => {
//     if (err) {
//         console.log('刪除失敗');
//         return
//     }
//     console.log('刪除成功')
// })

// fs.rm('./a', { recursive: true }, err => {
//     if (err) {
//         console.log('刪除失敗');
//         return
//     }
//     console.log('刪除成功')
// })

// 查看資料夾狀態資訊
/**
 * size: 檔案大小
 * birthtime: 創建時間
 * atime: 最後打開時間
 * mtime: 最後修改時間
 * ctime: 最後修改文件狀態時間
 */
// fs.stat('./資料夾操作.js', (err, data) => {
//     if (err) {
//         console.log('操作失敗');
//         return;
//     }
//     console.log(data);
//     // 獲取檔案類型 1.isFile()->是否為檔案 2.isDirectory()->是否為資料夾
//     // console.log(data.isFile());
//     // console.log(data.isDirectory());
// })
