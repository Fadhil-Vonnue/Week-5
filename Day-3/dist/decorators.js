"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let User = class User {
    id;
    name;
    users = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.users.push({ id, name });
    }
    addUser(id, name) {
        this.users.push({ id, name });
        return id;
    }
};
__decorate([
    log
], User.prototype, "addUser", null);
User = __decorate([
    sealed
], User);
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function log(value, name, descriptor) {
    let res = descriptor.value;
    console.log("Method name is ", name);
    descriptor.value = function (...args) {
        console.log("The method args are: " + JSON.stringify(args));
        const result = res.apply(this, args);
        console.log("The return value is: " + result);
        return result;
    };
}
const user = new User("uf1", "max");
user.addUser("uf2", "Gerald");
