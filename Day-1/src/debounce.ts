function debounce(
    this: void,
    func: (...args: unknown[]) => void,
    wait: number = 3000
) {
    let timeout: number;
    return (...args: unknown[]) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
function sayHello(arg: unknown) {
    console.log("My name is", arg);
}
const call = debounce(sayHello);
call("Amy");
call("Haarry");
