let num = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
    arrayName = "num[",
    index, item, array;
//for 迴圈
console.log("1.");
for (index = 0; index < num.length; index++) {
    for (item = 0; item < num[index].length; item++) {
        console.log(num[index][item]);
    }
}
console.log("\n");
//for in
console.log("2.");
for (index in num) {
    for (item in num[index]) {
        console.log(num[index][item]);
    }
}
console.log("\n");

//for of
console.log("3.");
for (index of num) {
    for (item of index)
        console.log(item);
}
console.log("\n");
//foreach
console.log("4.");
num.forEach(function (index) {
    index.forEach(function (item) {
        console.log(item);
    });
});
console.log("\n");

console.log("5.");
num.forEach(index => {
    index.forEach(item => {
        console.log(item);
    });
});
console.log("\n");

