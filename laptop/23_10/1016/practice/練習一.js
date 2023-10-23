const num = [89, 56, 77, 90, 43];
let index, item, arr, sum;

//for迴圈
console.log("for loop");
for(item=0,sum = 0;item<num.length;item++){
    console.log(num[item]);
    sum+=num[item];
}
console.log(sum+"\n");

//for in
console.log("for in");
sum = 0;
for(item in num){
    console.log(num[item]);
    sum+=num[item];
}
console.log(sum+"\n");

//for of
console.log("for of");
sum = 0;
for(item of num){
    console.log(item);
    sum+=item;
}
console.log(sum+"\n");

//foreach
console.log("foreach");
sum = 0;
num.forEach(item =>{
    console.log(item);
    sum+=item;
});
console.log(sum+"\n");

console.log("foreach");
sum = 0;
num.forEach((item,index,arr) =>{
    console.log(item);
});
console.log("\n");
