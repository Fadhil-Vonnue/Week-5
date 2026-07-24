"use strict";
function debounce(func, wait = 3000) {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
function sayHello(arg) {
    console.log("My name is", arg);
}
const call = debounce(sayHello);
call("Amy");
call("Haarry");
