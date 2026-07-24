class Subject {
    observers: observerInterface;
    constructor() {
        this.observers = [];
    }
    addObserver(fn: (state: CartItem[]) => void) {
        this.observers.push(fn);
    }
    notifyObservers(data: CartItem[]) {
        this.observers.forEach((observer) => observer(data));
    }
}
type observerInterface = Array<(state: CartItem[]) => void>;
const listener = new Subject();
interface CartItem {
    id: number;
    quantity: number;
    price: number;
    name: string;
}
interface CartInterface {
    items: CartItem[];
    total: number;
    addItem: (arg: CartItem) => Cart;
    removeItem: (arg: number) => Cart;
    updateQuantity: (arg1: number, arg2: number) => Cart;
    applyCoupon: (arg: string) => number | undefined;
    getTotal(): number;
}
class Cart implements CartInterface {
    items: CartItem[];
    total: number;
    constructor(...items: CartItem[]) {
        this.items = items;
        this.total = 0;
        let cart = structuredClone(this.items);
        listener.notifyObservers(cart);
    }
    addItem(item: CartItem) {
        return new Cart(...this.items, item);
    }
    removeItem(itemId: number) {
        const newcart: CartItem[] = this.items.filter((i) => i.id !== itemId);
        return new Cart(...newcart);
    }
    updateQuantity(itemId: number, quant: number) {
        const cloneItems = structuredClone(this.items);
        for (let item of cloneItems) {
            if (item.id == itemId) {
                item["quantity"] = quant;
            }
        }
        return new Cart(...cloneItems);
    }
    applyCoupon(couponName: string) {
        let coupon = Number(couponName.slice(-2));
        if (isNaN(coupon)) {
            console.log("COUPON INVALID");
        } else {
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
let item1: CartItem = {
    id: 10,
    quantity: 11,
    price: 100,
    name: "banana",
};
let item2: CartItem = {
    id: 11,
    quantity: 10,
    price: 50,
    name: "apple",
};
let item3: CartItem = {
    id: 12,
    quantity: 3,
    price: 500,
    name: "banana",
};
function display(cart: CartItem[]) {
    console.log("new cart:");
    for (let item of cart) console.log(item);
}
listener.addObserver(display);

const cart = new Cart(item1);
let newCartItems = cart.addItem(item2);
newCartItems = newCartItems.addItem(item3);
newCartItems = newCartItems.removeItem(14);
newCartItems = newCartItems.updateQuantity(11, 10);
console.log(newCartItems.getTotal());
