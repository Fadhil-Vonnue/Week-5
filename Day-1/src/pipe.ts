function pipe(...fns: ((arg: unknown) => unknown)[]): (x: unknown) => unknown {
    return function (x: unknown) {
        let res = x;
        fns.forEach((fn) => {
            res = fn(res);
        });
        return res;
    };
}
function double(x: unknown): unknown {
    if (typeof x === "number") return 2 * x;
}
function findLength(x: unknown): unknown {
    if (typeof x === "string") return x.length;
}

console.log(pipe(findLength, double)("hello"));
