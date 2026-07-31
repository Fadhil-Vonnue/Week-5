export class Queue {
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
        if ((this.queue.length = 0))
            return true;
        return false;
    }
    getQueue() {
        return this.queue;
    }
}
