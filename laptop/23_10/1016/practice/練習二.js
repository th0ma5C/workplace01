const names = ["王小明","李小麗","張三","李四","王五"];
let index, item, arr;

console.log("1.");
for(item=0;item<names.length;item++){
    console.log(names[item]);
}
console.log("\n");

console.log("2.");
for(item in names){
    console.log(names[item]);
}
console.log("\n");

console.log("3.");
for(item of names){
    console.log(item);
}
console.log("\n");

console.log("4.");
names.forEach(item => {
    console.log(item);
});
console.log("\n");

console.log(names);