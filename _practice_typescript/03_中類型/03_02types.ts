//object表示一個物件
let a: object;

// {屬性名: 屬性值, 屬性名: 屬性值} 用來指定物件中可以包含哪些屬性
let b: { name: string, b?: number };
b = { name: 'thomas', b: 18 };

// [propName: string]:unknown 表示任意類型屬性
let c: { name: string, [propName: string]: unknown };
c = { name: 'tom', age: 18 };

/**
 *  設置函數結構的類型聲明
 *      (參數:類型, 參數:類型)=>返回值
 */
let d: (a: number, b: number) => number;
d = function (n1, n2): number {
    return 10
}


/**
 *  陣列類型聲明:
 *      1. 類型[]
 *      2. Array<類型>
 */
// 第一種
let e: string[];
e = ['1', '2'];

// 第二種
let f: Array<number>;
f = [1, 2, 3];

/**
 * tuple: 元組，固定長度的陣列
 *      語法: [類型,類型]
 */
let g: [string, string];
g = ['1', '2'];

/**
 * enum: 枚舉，
 */
enum gender {
    male = 0,
    female = 1
}
let h: { name: string, gender: gender };
h = {
    name: 'tom',
    gender: gender.male
}

// & 表示同時
let i: { name: string } & { age: number };
i = { name: 'tom', age: 18 }

// 類型別名
type myType = 1 | 2 | 3;
let j: myType;
j = 1;