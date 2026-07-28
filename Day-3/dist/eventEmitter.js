"use strict";
class TypedEventEmitter {
    events = { "*": [] };
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        return this;
    }
    off(event, listener) {
        if (!this.events[event])
            return;
        this.events[event] = this.events[event].filter((el) => el !== listener);
    }
    emit(event, ...args) {
        if (!this.events[event])
            return;
        for (let ev of this.events[event]) {
            ev(...args);
        }
    }
}
class UserStore extends TypedEventEmitter {
    users;
    constructor() {
        super();
        this.users = {};
    }
    userAdded(user) {
        if (!this.users[user.id]) {
            this.users[user.id] = user.name;
            this.emit("userAdded", user);
        }
        return;
    }
    userRemoved(id) {
        delete this.users[id];
        this.emit("userRemoved", id);
    }
    userUpdated(id, update) {
        let user = this.users[id];
        if (user) {
            if (typeof update.name === "string")
                this.users[id] = update.name;
            console.log(this.users);
            this.emit("userUpdated", id, update);
        }
    }
}
let user = {
    id: "1",
    name: "Max",
};
let user1 = {
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
