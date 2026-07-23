interface User {
    id: number;
    name: string;
    email: string;
    role: "admin" | "viewer" | "editor";
    createdAt: Date;
    avatar?: string;
}
let obj: User = {
    id: 1,
    name: "Max",
    email: "max123@gmail.com",
    role: "admin",
    createdAt: new Date(),
};
let obj1: User = {
    id: 1,
    name: "Bell",
    email: "bell123@gmail.com",
    role: "editor",
    createdAt: new Date(),
};
let obj2: User = {
    id: 1,
    name: "Ruth",
    email: "ruth123@gmail.com",
    role: "viewer",
    createdAt: new Date(),
};
let obj3: User = {
    id: 1,
    name: "John",
    email: "john123@gmail.com",
    role: "viewer",
    createdAt: new Date(),
};
let obj4: User = {
    id: 1,
    name: "Alice",
    email: "alice123@gmail.com",
    role: "admin",
    createdAt: new Date(),
    avatar: "emoji",
};
const readonlyUser: Readonly<User> = {
    id: 6,
    name: "Ashley",
    email: "ashley123@gmail.com",
    role: "editor",
    createdAt: new Date(),
};
// Cannot assign to 'id' because it is a read-only property
// readonlyUser.id=10

function updateUser(user: User, changes: Partial<User>) {
    return { ...user, ...changes };
}
console.log(updateUser(obj, { id: 25, name: "SecondName" }));

interface User1 {
    id: number;
}

interface User1 {
    name: string;
}

type User2 = {
    id: number;
    name: string;
};
// Cannot do this because duplicare identifier
// type User2={
//     role:"editor"|"viewer"
// }
