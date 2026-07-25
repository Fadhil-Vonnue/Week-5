"use strict";
const users = [
    {
        id: "u1",
        name: "max",
        age: 18,
    },
    {
        id: "u2",
        name: "Josh",
        age: 22,
    },
    {
        id: "u3",
        name: "Ashley",
        age: 32,
    },
];
function createUser(user) {
    let createdUser = {
        id: String(crypto.randomUUID()),
        name: user.name,
        age: user.age,
        avatar: user.avatar,
        createdAt: new Date(),
    };
    return createdUser;
}
function updateUser(id, changes) {
    return new Promise((resolve, reject) => {
        let index = -1;
        const user = users.find((element, i) => {
            if (element.id === id) {
                index = i;
                return true;
            }
            else
                return false;
        });
        if (user && index >= 0) {
            users[index] = { ...users[index], ...changes };
            resolve({ ...user, ...changes });
        }
    });
}
const newUser = updateUser("u1", { name: "MaxC" });
newUser.then((response) => {
    console.log(response.name);
});
function createRequiredUser(data) {
    console.log(data);
}
// createRequiredUser(users[0]); Gives an error as theres no hobby
const user1 = {
    id: "u10",
    name: "holloway",
    age: 18,
    avatar: "fencer",
    createdAt: new Date(),
};
createRequiredUser(user1);
function usersPreview() {
    return users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
        };
    });
}
const newUser123 = {
    id: "uf1",
    name: "ferran",
    avatar: "fencer",
};
const newUser1233 = {
    name: "ferran",
    age: 10,
};
const newConfig = {
    name: "max",
    id: "umf1",
    hobby: "swimming",
};
