"use strict";
function identity(arg) {
    return arg;
}
let str = identity("hello");
let num = identity(12);
let example = {
    id: 10,
    name: "max",
};
let custom = identity(example);
function first(arr) {
    return arr[0];
}
first([1, 2, 3]);
async function fetchData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch (err) {
        return Promise.reject(err);
    }
}
// fetchData<string>("https://jsonplaceholder.typicode.com/todos/1").then(
//     (response) => {
//         const data = response;
//         console.log(response.toLowerCase());
//     }
// );
function getProperty(obj, key) {
    return obj[key];
}
getProperty(example, "id");
class Queue {
    queue;
    constructor() {
        this.queue = [];
    }
    enqueue(arg) {
        this.queue.push(arg);
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }
    isEmpty() {
        if (this.queue.length > 0)
            return true;
        return false;
    }
    getQueue() {
        return this.queue;
    }
}
const q = new Queue();
q.enqueue("hey");
// q.enqueue(124);
q.enqueue("HEKKO");
const qs = q.getQueue();
console.log(q.isEmpty());
console.log(q.dequeue());
console.log(q.peek());
