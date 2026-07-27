type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
type MyPartial<T> = { [K in keyof T]?: T[K] };
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
interface obj {
    id: string;
    name: {
        age: number;
        hobby: string;
    };
}
type MyDeepPartial<P> = P extends object
    ? { [K in keyof P]?: MyDeepPartial<P[K]> }
    : P;
const obj1: MyPartial<obj> = {
    id: "hello",
    name: {
        age: 22,
        hobby: "swimming",
    },
};
const obj2: obj = {
    id: "hello",
    name: {
        age: 22,
        hobby: "swimming",
    },
};
const obj3: MyDeepPartial<obj> = {
    name: {
        age: 12,
    },
};
const userProfile = {
    id: 1,
    username: "Max",
};
type UserProperty = keyof typeof userProfile;
function getUserProperty(key: UserProperty) {
    return userProfile[key];
}
let test: any = "hello";
console.log(getUserProperty("id"));
console.log(getUserProperty(test));
