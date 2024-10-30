"use strict";

var foo = (function () {
    function foo(acc, x) {
        if (x <= 1) return acc;
        return foo((x / 2) + acc, x - 1);
    }
    return function (x) {
        return foo(1, x);
    }
})();

console.log(foo(123456));