function getLength(str: string) {
    return str.length;
}
// const len = getLength.call(undefined, 123); Gives error with strictBindCallApply flag turned on
const len = getLength.call(undefined, "Kaulo");
type StringOrNumberFunc = (ns: string | number) => void;

// const fn: StringOrNumberFunc = getLength;
// console.log(fn(100)); - Gives error with strictFunctionTypes flag turned on
declare const loggedInUsername: string;
const user = {
    id: 2,
    name: "hello",
    age: 19,
};
function changId(id) {
    if (typeof id === "number") return user.id;
}
console.log(changId(2) * 2);
// gives error with strictNullChecks, "Object possibly undefined"

function display(s) {
    console.log(s);
}
display("heyy");
// Parameter s has implicit any type error when implicitAny flag is on
let arr: string[] = [];
console.log(arr[0].toLowerCase);
//the above code gives error with strictNullChecks and noIndexedAccess flags turned on.
