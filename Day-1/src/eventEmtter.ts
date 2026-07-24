type func = (...x: unknown[]) => void;
type obj = {
    [key: string]: func[];
};
type userObj = {
    [key: string]: number | string;
};
class EventEmitter {
    events: obj;
    constructor() {
        this.events = {};
    }
    on(event: string, listener: func) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    off(event: string, listener: func) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter((el) => el !== listener);
    }
    emit(event: string, ...args: unknown[]) {
        if (!this.events[event]) return;
        for (let ev of this.events[event] as func[]) {
            ev(...args);
        }
        if (this.events["*"])
            for (let ev of this.events["*"]) {
                ev(...args);
            }
    }
    once(event: string, listener: func) {
        const listen = function (this: EventEmitter, ...args: unknown[]) {
            this.off(event, listener);
            let list: unknown[] = [...args];
            listener(list);
        };
        this.on(event, listen);
    }
}
class UserStore extends EventEmitter {
    users: userObj;
    constructor() {
        super();
        this.users = {};
    }
    userAdded(id: number | string, name: string) {
        if (!this.users[name]) {
            this.users[id] = name;
            this.emit("userAdded", id);
        }
        return;
    }
    userRemoved(id: number | string) {
        delete this.users[id];
        this.emit("userRemoved", id);
    }
    userUpdated(id: number | string, update: number | string) {
        if (!this.users[update]) {
            this.users[id] = update;
            this.emit("userUpdated", id);
        }
        return;
    }
}
const emitter = new EventEmitter();
const logData = (data: unknown) => console.log(`Data: ${data}`);
emitter.on("*", logData);
emitter.on("data", logData);
emitter.emit("data", "Test1");
emitter.off("data", logData);
emitter.emit("data", "Test2");

const userStore = new UserStore();
userStore.on("userAdded", (id) => {
    console.log(`USER with ID ${id} ADDED `);
});
userStore.on("userRemoved", (id) => {
    console.log(`USER with ID ${id} REMOVED `);
});
userStore.on("userUpdated", (id) => {
    console.log(`USER with ID ${id} UPDATED `);
});

userStore.userAdded(10, "Fadhil");
userStore.userAdded(11, "Faro");
userStore.userRemoved(11);
userStore.userUpdated(10, "HEATHER");
