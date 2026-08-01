export class Queue<T> {
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
        if ((this.queue.length = 0)) return true;
        return false;
    }
    getQueue() {
        return this.queue;
    }
}
