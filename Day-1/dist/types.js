import { getSum, getArrayLength, maxInterval } from "ts-library";
console.log(getArrayLength("string"));
console.log(maxInterval);
console.log(getSum(1, 2));
__APP_VERSION__;
const palette = { primary: "#0D9488" };
// Satisfies is better than type annotations when the field could have union types eg: string | num. If we use type annotation, the type will be string|number even if pass a string, so we wont be able to use string operations on it
