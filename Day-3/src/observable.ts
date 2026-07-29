import { subscribe } from "node:diagnostics_channel";

type Observer<T> = (args: T) => void;
interface Observable<T> {
    subscribe(observer: Observer<T>): Unsubscribe;
}
type Unsubscribe = () => void;
class Subject<T> implements Observable<T> {
    observers: Observer<T>[];
    constructor() {
        this.observers = [];
    }
    subscribe(observer: Observer<T>): Unsubscribe {
        this.observers.push(observer);
        return () => {
            this.observers = this.observers.filter((el) => el !== observer);
        };
    }
}
let sum = 0;
const subject = new Subject<string>();
const unsubscribe = subject.subscribe(async (name: string) =>
    console.log(name)
);
subject.subscribe((name: string) => console.log(name));
console.log(subject.observers);
unsubscribe();
console.log(subject.observers);

interface Command {
    execute(): void;
    undo(): void;
}
class CommandHistory {
    commandHistory: Command[] = [];
    #redo: Command[] = [];
    executeCommand(command: Command) {
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
const increment: Command = {
    execute: () => (sum = sum + 1),
    undo: () => (sum = sum - 1),
};
const decrement: Command = {
    execute: () => (sum = sum - 1),
    undo: () => (sum = sum + 1),
};
const double: Command = {
    execute: () => (sum = sum * 2),
    undo: () => (sum = sum / 2),
};
// -------------------------------------------
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

// ----------------------------------------------------
allComms.executeCommand(increment);
allComms.executeCommand(increment);
allComms.executeCommand(increment);
allComms.executeCommand(double);
allComms.executeCommand(decrement);
allComms.undo();
allComms.undo();
allComms.redo();
console.log(sum);
allComms.executeCommand(increment);
console.log(sum);
allComms.redo();
console.log(sum);
allComms.undo();
console.log(sum);
allComms.redo();
console.log(sum);
allComms.redo();
console.log(sum);
