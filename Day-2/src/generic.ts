function identity<T>(arg: T): T {
    return arg;
}

let str = identity("hello");
let num = identity(12);

interface User {
    id: number;
    name: string;
}
let example: User = {
    id: 10,
    name: "max",
};
let custom = identity(example);

function first<T>(arr: T[]): T | undefined {
    return arr[0];
}

first([1, 2, 3]);

async function fetchData<T>(url: string): Promise<T> {
    try {
        const res = await fetch(url);
        const data: T = await res.json();
        return data;
    } catch (err) {
        return Promise.reject(err);
    }
}
// fetchData<string>("https://jsonplaceholder.typicode.com/todos/1").then(
//     (response) => {
//         const data = response;
//         console.log(response.toLowerCase());
//     }
// );

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProperty(example, "id");

class Queue<T> {
    queue: T[];
    constructor() {
        this.queue = [];
    }
    enqueue(arg: T) {
        this.queue.push(arg);
    }
    dequeue(): T | undefined {
        return this.queue.shift();
    }
    peek(): T | undefined {
        return this.queue[0];
    }
    isEmpty(): boolean {
        if (this.queue.length > 0) return true;
        return false;
    }
    getQueue() {
        return this.queue;
    }
}

const q = new Queue<string>();
q.enqueue("hey");
// q.enqueue(124);
q.enqueue("HEKKO");
const qs = q.getQueue();
console.log(q.isEmpty());
console.log(q.dequeue());
console.log(q.peek());
