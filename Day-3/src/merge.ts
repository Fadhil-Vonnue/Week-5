import { obj } from "#test_library";
import * as test from "#test_library";
declare global {
    interface Array<T> {
        sum: T extends number ? () => number : never;
    }
    interface Window {
        appState: Window;
    }
}
interface User {
    id: number;
}
interface User {
    name: string;
}
const user: User = {
    id: 1,
    name: "max",
};

const arr = [100, 200];
// console.log(arr.sum());
interface Array<T> {
    sum: T extends number ? () => number : never;
}

interface AppState {
    id: number;
    listeners: Array<string>;
}

interface Window {
    appState: AppState;
}

declare module "#test_library" {
    interface obj {
        name: string;
    }

    function greet(): string;
}

let obj1: obj = {
    id: 101,
    name: "hello",
};

console.log(test.greet());
