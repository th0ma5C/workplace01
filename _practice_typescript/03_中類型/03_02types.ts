//object表示一個物件
let a: object;

// {屬性名: 屬性值, 屬性名: 屬性值} 用來指定物件中可以包含哪些屬性
let b: { name: string, b?: number };
b = { name: 'thomas', b: 18 };

// [propName: string]:unknown 表示任意類型屬性
let c: { name: string, [propName: string]: unknown };
c = { name: 'tom', age: 18 };