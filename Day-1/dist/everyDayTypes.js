let name = "Max";
let nums = 10;
let condition = true;
let value = null;
let result = undefined;
let symbol = Symbol(name);
let integerBig = 12n;
let data = { hell: "heyy" };
let type;
let times;
let depth;
let obj;
let array;
let tuple;
let id;
let stringArray;
let dimensions = [["max", 2]];
let state;
let objArray;
function greet(name) {
    return `hello ${name}`;
}
function add(num1, num2) {
    return num1 + num2;
}
function username(user, id) {
    return `${user}+${id}`;
}
function getCookie(flag) {
    return flag ? "COOKIE" : "NO COOKIE";
}
function concatenate(str1, str2) {
    return str1 + str2;
}
console.log(getCookie(true).toLowerCase());
console.log(add(1, 2));
console.log(username("max", 786));
console.log(greet("MAX"));
console.log(concatenate("hey", "JUDE"));
const greet1 = "hello";
let greet2 = "hello";
function findSquare(val) {
    if (typeof val === "string") {
        let value = Number(val);
        return value * value;
    }
    else
        return val * val;
}
console.log(findSquare("12"));
console.log(findSquare(12));
export {};
