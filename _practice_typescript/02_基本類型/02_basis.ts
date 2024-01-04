/**
 * 1.宣告變數，同時指定型別
 * 2.宣告變數並指定型別後賦值
 * 3.同時宣告變數和賦值，TS可自動指定型別，不須另外聲明
 * 4.可對函數的參數、函數返回值進行型別限制
 */

let a: number;

let b: number = 1;

let c = 1;

function myFun(a: number, b: number): number {
    return a + b
}