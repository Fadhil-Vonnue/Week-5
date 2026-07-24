"use strict";
class Subject {
    observers;
    constructor() {
        this.observers = [];
    }
    addObserver(fn) {
        this.observers.push(fn);
    }
    notifyObservers(data) {
        this.observers.forEach((observer) => observer(data));
    }
}
const listener = new Subject();
class Cart {
    items;
    total;
    constructor(...items) {
        this.items = items;
        this.total = 0;
        let cart = structuredClone(this.items);
        listener.notifyObservers(cart);
    }
    addItem(item) {
        return new Cart(...this.items, item);
    }
    removeItem(itemId) {
        const newcart = this.items.filter((i) => i.id !== itemId);
        return new Cart(...newcart);
    }
    updateQuantity(itemId, quant) {
        const cloneItems = structuredClone(this.items);
        for (let item of cloneItems) {
            if (item.id == itemId) {
                item["quantity"] = quant;
            }
        }
        return new Cart(...cloneItems);
    }
    applyCoupon(couponName) {
        let coupon = Number(couponName.slice(-2));
        if (isNaN(coupon)) {
            console.log("COUPON INVALID");
        }
        else {
            let total = this.getTotal();
            return total - (total * coupon) / 100;
        }
    }
    getTotal() {
        let total = 0;
        for (let it of this.items) {
            total += it.quantity * it.price;
        }
        return total;
    }
}
let item1 = {
    id: 10,
    quantity: 11,
    price: 100,
    name: "banana",
};
let item2 = {
    id: 11,
    quantity: 10,
    price: 50,
    name: "apple",
};
let item3 = {
    id: 12,
    quantity: 3,
    price: 500,
    name: "banana",
};
function display(cart) {
    console.log("new cart:");
    for (let item of cart)
        console.log(item);
}
listener.addObserver(display);
const cart = new Cart(item1);
let newCartItems = cart.addItem(item2);
newCartItems = newCartItems.addItem(item3);
newCartItems = newCartItems.removeItem(14);
newCartItems = newCartItems.updateQuantity(11, 10);
console.log(newCartItems.getTotal());
