let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf.toString()); //utf-8 => iloveyou

//[]元素的操作
let buf2 = Buffer.from("hello");
console.log(buf2[1].toString(2)); //加上toString(2)可由10進制轉為2進制 101=>01100101
console.log(buf2); //hello
buf2[0] = 95;
console.log(buf2.toString()); //_ello

//暫存溢出
console.log(buf2);
buf2[0] = 361; // 捨棄高位的數字 0001 0110 1001 => 0110 1001
console.log(buf2);

//中文 一個中文字佔三個字節
let buf3 = Buffer.from("你好");
console.log(buf);