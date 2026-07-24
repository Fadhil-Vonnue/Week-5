function processInput(value: string | number | boolean | null | undefined) {
    if (typeof value == "boolean") console.log("boolean", value);
    else if (value) {
        if (typeof value == "string") console.log("string", value);
        if (typeof value == "number") console.log("number", value);
    } else {
        if (typeof value === "object") console.log("NULL");
        if (typeof value == "undefined") console.log("undefined");
    }
}
processInput(null);
processInput(true);
processInput(100);
processInput("hello");
processInput(undefined);
interface User {
    id: number;
    name: string;
}

function isUser(value: unknown): value is User {
    if (
        typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "name" in value
    )
        return true;
    return false;
}

type Shape =
    | {
          kind: "circle";
          radius: number;
      }
    | {
          kind: "rect";
          w: number;
          h: number;
      };

function getArea(shape: Shape): number {
    let area: number;
    switch (shape.kind) {
        case "circle":
            area = shape.radius * shape.radius * Math.PI;
            break;
        case "rect":
            area = shape.w * shape.h;
            break;
        default:
            const _exhaustiveSwitch: never = shape;
            return _exhaustiveSwitch;
    }
    return area;
}
// Typescript catches missing case
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

let user: User = { id: 1, name: "batman" };
console.log(isUser(user));
console.log(isUser("user"));

let circle: Shape = {
    kind: "circle",
    radius: 5,
};
let rectangle: Shape = {
    kind: "rect",
    w: 10,
    h: 10,
};

console.log(getArea(circle));
console.log(getArea(rectangle));
