"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const obj1 = {
    id: "hello",
    name: {
        age: 22,
        hobby: "swimming",
    },
};
const obj2 = {
    id: "hello",
    name: {
        age: 22,
        hobby: "swimming",
    },
};
const obj3 = {
    name: {
        age: 12,
    },
};
const userProfile = {
    id: 1,
    username: "Max",
};
function getUserProperty(key) {
    return userProfile[key];
}
let test = "hello";
console.log(getUserProperty("id"));
console.log(getUserProperty(test));
