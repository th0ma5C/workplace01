function logArguments() {
    const argsArray = Array.from.call(null, arguments);
    console.log(argsArray.join(', '));
}

logArguments(1, 2, 3); // 輸出: 1, 2, 3
