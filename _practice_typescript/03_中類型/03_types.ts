// 字面量進行類型聲明
let a: 10;

let b: boolean | string; //聯合類型，使用"|"

let c: any; //顯式任意類型，相當於關閉TS類型檢測，不建議使用
let d; //隱式任意類型

let e: unknown; //未知類型，類似any類型，但較安全
e = 'a'
// any類型的變量，可以賦值給任意變量，unknown不行
let s: string;
s = c;

// 類型斷言，可告訴解析器變量的實際類型
s = e as string;
s = <string>e;

// void 用來表示空，用在函數表示沒有返回值

// never 用來表示沒有值，永遠不會返回結果