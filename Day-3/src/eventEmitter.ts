type func = (...x: unknown[]) => void;
type obj = {
    [key: string]: func[];
};
type userObj = {
    [key: string]: number | string;
};
class TypedEventEmitter<Events extends Record<string, any[]>> {
    events: {
        [K in keyof Events]?: ((...args: Events[K]) => void)[];
    } = { "*": [] };
    on<K extends keyof Events>(
        event: K,
        listener: (...args: Events[K]) => void
    ): this {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        return this;
    }
    off<K extends keyof Events>(
        event: K,
        listener: (...args: Events[K]) => void
    ) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter((el) => el !== listener);
    }
    emit<K extends keyof Events>(event: K, ...args: Events[K]) {
        if (!this.events[event]) return;
        for (let ev of this.events[event]) {
            ev(...args);
        }
    }
}
interface User {
    id: string;
    name: string;
}
type UserEvents = {
    userAdded: [User];
    userRemoved: [string];
    userUpdated: [string, Partial<User>];
};
class UserStore extends TypedEventEmitter<UserEvents> {
    users: userObj;
    constructor() {
        super();
        this.users = {};
    }
    userAdded(user: User) {
        if (!this.users[user.id]) {
            this.users[user.id] = user.name;
            this.emit("userAdded", user);
        }
        return;
    }
    userRemoved(id: string) {
        delete this.users[id];
        this.emit("userRemoved", id);
    }
    userUpdated(id: string, update: Partial<User>) {
        let user = this.users[id];
        if (user) {
            if (typeof update.name === "string") this.users[id] = update.name;
            console.log(this.users);
            this.emit("userUpdated", id, update);
        }
    }
}
let user: User = {
    id: "1",
    name: "Max",
};
let user1: User = {
    id: "2",
    name: "Stalin",
};
let changes = {
    name: "Hitler",
};
let store = new UserStore();
store.userAdded(user);
store.userAdded(user1);
store.userRemoved("1");
store.userUpdated("2", changes);
