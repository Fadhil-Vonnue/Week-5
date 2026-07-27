export {};
type isArray<T> = T extends any[] ? true : false;
type Flatten<T> = T extends Array<infer Item> ? Item : T;
type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T;
type ReturnType<T> = T extends (...args: any[]) => infer U ? U : any;
type Parameters<T> = T extends (...args: infer U) => any ? U : any;

let arr: string[] = [];
let isArray: isArray<typeof arr>;

let arr1 = [[[["depth"]]]];
let flatten: Flatten<typeof arr1>;

function func(arg: number) {
    return arg;
}
let returns: ReturnType<typeof func>;

function func1(text: string, id: number, arg3: { id: number; name: string }) {
    return "test";
}

let args: Parameters<typeof func1>;

function func2(...args: Parameters<typeof func1>) {
    console.log(args);
}

func2("test", 1, { id: 1, name: "Max" });
