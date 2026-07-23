"use strict";
let obj = {
    id: 1,
    name: "Max",
    email: "max123@gmail.com",
    role: "admin",
    createdAt: new Date(),
};
let obj1 = {
    id: 1,
    name: "Bell",
    email: "bell123@gmail.com",
    role: "editor",
    createdAt: new Date(),
};
let obj2 = {
    id: 1,
    name: "Ruth",
    email: "ruth123@gmail.com",
    role: "viewer",
    createdAt: new Date(),
};
let obj3 = {
    id: 1,
    name: "John",
    email: "john123@gmail.com",
    role: "viewer",
    createdAt: new Date(),
};
let obj4 = {
    id: 1,
    name: "Alice",
    email: "alice123@gmail.com",
    role: "admin",
    createdAt: new Date(),
    avatar: "emoji",
};
const readonlyUser = {
    id: 6,
    name: "Ashley",
    email: "ashley123@gmail.com",
    role: "editor",
    createdAt: new Date(),
};
// Cannot assign to 'id' because it is a read-only property
// readonlyUser.id=10
function updateUser(user, changes) {
    return { ...user, ...changes };
}
console.log(updateUser(obj, { id: 25, name: "SecondName" }));
// Cannot do this because duplicare identifier
// type User2={
//     role:"editor"|"viewer"
// }
