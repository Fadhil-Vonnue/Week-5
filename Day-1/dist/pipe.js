"use strict";
function pipe(...fns) {
    return function (x) {
        let res = x;
        fns.forEach((fn) => {
            res = fn(res);
        });
        return res;
    };
}
function double(x) {
    if (typeof x === "number")
        return 2 * x;
}
function findLength(x) {
    if (typeof x === "string")
        return x.length;
}
console.log(pipe(findLength, double)("hello"));
