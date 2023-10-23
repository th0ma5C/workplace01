let num = [1,2,3,4],item;
//for 迴圈
for(let i =0;i<num.length;i++){
    const item = num[i];
    console.log(i,item);
}
console.log("\n");
//for in
for (item in num){
    console.log(item,num[item]);
    // console.log(num[item]);
}
console.log("\n");
//for of
for (item of num){
    console.log(item);
}
console.log("\n");
//foreach
num.forEach(function(item,i){
    console.log(i, item)
});
console.log("\n");

num.forEach((item,i,array) => console.log(array,i,item));
console.log("\n");