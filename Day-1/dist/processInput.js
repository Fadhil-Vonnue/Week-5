"use strict";
function processInput(value) {
    if (typeof value == "boolean")
        console.log("boolean", value);
    else if (value) {
        if (typeof value == "string")
            console.log("string", value);
        if (typeof value == "number")
            console.log("number", value);
    }
    else {
        if (typeof value === "object")
            console.log("NULL");
        if (typeof value == "undefined")
            console.log("undefined");
    }
}
processInput(null);
processInput(true);
processInput(100);
processInput("hello");
processInput(undefined);
function isUser(value) {
    if (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "name" in value)
        return true;
    return false;
}
function getArea(shape) {
    let area;
    switch (shape.kind) {
        case "circle":
            area = shape.radius * shape.radius * Math.PI;
            break;
        case "rect":
            area = shape.w * shape.h;
            break;
        default:
            const _exhaustiveSwitch = shape;
            return _exhaustiveSwitch;
    }
    return area;
}
// type Shape =
//     | {
//           kind: "circle";
//           radius: number;
//       }
//     | {
//           kind: "rect";
//           w: number;
//           h: number;
//       }
//     | {
//           kind: "triangle";
//           l: number;
//       };
//-------------------Test-------------------------------
let user = { id: 1, name: "batman" };
console.log(isUser(user));
console.log(isUser("user"));
let circle = {
    kind: "circle",
    radius: 5,
};
let rectangle = {
    kind: "rect",
    w: 10,
    h: 10,
};
console.log(getArea(circle));
console.log(getArea(rectangle));
