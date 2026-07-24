"use strict";
const memoize = function (fn) {
    const cache = new Map();
    return (...args) => {
        let strkey = args.join(",");
        console.log(strkey);
        if (!cache.get(strkey)) {
            cache.set(strkey, fn.apply(this, args));
        }
        return cache.get(strkey);
    };
};
