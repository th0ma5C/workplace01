//創建方式有三種
//1. alloc 創建全新的暫存，並將每個數據為零
let buf = Buffer.alloc(10)
// console.log(buf);

//2. allocUnsafe 不會歸零內存數據，但創建速度較快
let buf2 = Buffer.allocUnsafe(10000);
// console.log(buf2);

//3. from 建立包含指定字串，數組或緩衝區的新緩衝區。
let buf3 = Buffer.from("hello")
console.log(buf3);