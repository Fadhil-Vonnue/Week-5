interface User {
    id: string;
    name: string;
    age: number;
    avatar?: string;
    createdAt?: Date;
}
const users: User[] = [
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
function createUser(user: UserInput): User {
    let createdUser: User = {
        id: String(crypto.randomUUID()),
        name: user.name,
        age: user.age,
        avatar: user.avatar,
        createdAt: new Date(),
    };

    return createdUser;
}
function updateUser(id: string, changes: Partial<User>): Promise<User> {
    return new Promise((resolve, reject) => {
        let index: number = -1;
        const user = users.find((element, i) => {
            if (element.id === id) {
                index = i;
                return true;
            } else return false;
        });
        if (user && index >= 0) {
            users[index] = { ...users[index], ...changes };
            resolve({ ...user, ...changes } as User);
        }
    });
}
const newUser = updateUser("u1", { name: "MaxC" });
newUser.then((response) => {
    console.log(response.name);
});

function createRequiredUser(data: Required<User>) {
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

type userPreview = Pick<User, "id" | "name" | "avatar">;
function usersPreview(): userPreview[] {
    return users.map((user): userPreview => {
        return {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
        };
    });
}
const newUser123: userPreview = {
    id: "uf1",
    name: "ferran",
    avatar: "fencer",
};
type UserInput = Omit<User, "id" | "createdAt">;
const newUser1233: UserInput = {
    name: "ferran",
    age: 10,
};

type ConfigKey = "name" | "hobby" | "id";
type config = Record<ConfigKey, string>;
const newConfig: config = {
    name: "max",
    id: "umf1",
    hobby: "swimming",
};
