import { Queue } from "./queue";

describe("testing Queue functions", () => {
    let queue = new Queue<string>();
    test("enqueue data", () => {
        queue.enqueue("MAX");
        expect(queue.queue).toContain("MAX");
    });
    test("dequeue data", () => {
        expect(queue.dequeue()).toBe("MAX");
    });
    test("peek data", () => {
        queue.enqueue("Ashley");
        queue.enqueue("Raj");
        expect(queue.peek()).toBe("Ashley");
    });
    test("queue isEmpty", () => {
        expect(queue.isEmpty()).toBeFalsy();
    });
    test("get queue", () => {
        expect(queue.getQueue()).toBeInstanceOf(Object);
    });
});
