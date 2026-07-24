export {};
const memoize = function (fn: (...args: unknown[]) => unknown) {
    const cache = new Map();
    return function (this: void, ...args: unknown[]) {
        let strkey: string = args.join(",");
        if (!cache.get(strkey)) {
            cache.set(strkey, fn.apply(this, args));
        }
        return cache.get(strkey);
    };
};
const fibonacci1 = function (num: unknown): number | null {
    if (typeof num === "number") {
        if (num == 1) {
            return 1;
        }
        if (num == 0) {
            return 0;
        }
        let first = fibonacci1(num - 1);
        let second = fibonacci1(num - 2);
        if (first != null && second !== null) return first + second;
    }
    return null;
};

const fibonacciMemoize = memoize(fibonacci1);
console.log(fibonacciMemoize(40));
console.log(fibonacciMemoize(40));
