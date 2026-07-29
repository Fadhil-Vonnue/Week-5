class Subject {
    observers;
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
        return () => {
            this.observers = this.observers.filter((el) => el !== observer);
        };
    }
}
let sum = 0;
const subject = new Subject();
const unsubscribe = subject.subscribe(async (name) => console.log(name));
subject.subscribe((name) => console.log(name));
console.log(subject.observers);
unsubscribe();
console.log(subject.observers);
class CommandHistory {
    commandHistory = [];
    #redo = [];
    executeCommand(command) {
        this.#redo = [];
        command.execute();
        this.commandHistory.push(command);
    }
    undo() {
        if (this.commandHistory.length > 0) {
            let comm = this.commandHistory.pop();
            if (comm != undefined) {
                this.#redo.push(comm);
                comm.undo();
            }
        }
    }
    redo() {
        if (this.#redo.length > 0) {
            let comm = this.#redo.pop();
            if (comm != undefined) {
                this.commandHistory.push(comm);
                comm.execute();
            }
        }
    }
}
const allComms = new CommandHistory();
const increment = {
    execute: () => (sum = sum + 1),
    undo: () => (sum = sum - 1),
};
const decrement = {
    execute: () => (sum = sum - 1),
    undo: () => (sum = sum + 1),
};
const double = {
    execute: () => (sum = sum * 2),
    undo: () => (sum = sum / 2),
};
allComms.executeCommand(increment);
allComms.executeCommand(increment);
allComms.executeCommand(increment);
allComms.executeCommand(double);
allComms.executeCommand(decrement);
console.log(sum);
allComms.undo();
console.log(sum);
allComms.undo();
console.log(sum);
allComms.undo();
console.log(sum);
allComms.undo();
console.log(sum);
allComms.undo();
console.log(sum);
export {};
// console.log(sum);
// allComms.redo();
// console.log(sum);
// allComms.executeCommand(increment);
// console.log(sum);
// allComms.redo();
// console.log(sum);
// allComms.undo();
// console.log(sum);
// allComms.redo();
// console.log(sum);
// allComms.redo();
// console.log(sum);
