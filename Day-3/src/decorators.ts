@sealed
class User {
    id: string;
    name: string;
    users: UserBase[] = [];
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.users.push({ id, name });
    }
    @log
    addUser(id: string, name: string): string {
        this.users.push({ id, name });
        return id;
    }
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function log(
    value: any,
    name: string,
    descriptor: TypedPropertyDescriptor<any>
) {
    let res = descriptor.value;
    console.log("Method name is ", name);
    descriptor.value = function (...args: any[]) {
        console.log("The method args are: " + JSON.stringify(args));
        const result = res.apply(this, args);
        console.log("The return value is: " + result);
        return result;
    };
}

interface UserBase {
    id: string;
    name: string;
}

const user = new User("uf1", "max");
user.addUser("uf2", "Gerald");
