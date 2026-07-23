export {};
let name: string = "Max";
let nums: number = 10;
let condition: boolean = true;
let value: null = null;
let result: undefined = undefined;
let symbol:symbol=Symbol(name)
let integerBig:bigint=12n
let data:any={hell:"heyy"}
let type:unknown;
let times:never;
let depth:void;
let obj:object;
let array:Array<number>;
let tuple:[number,string]
let id:number | string;
let stringArray:string[]
let dimensions:[string,number][]=[["max",2]]
let state:"success"|"error"|"warning";
let objArray:object[]

function greet(name:string):string{
    return `hello ${name}`
}
function add(num1:number,num2:number):number{
    return num1+num2
}
function username(user:string,id:number){
     return `${user}+${id}`
}
function getCookie(flag:boolean){
    return flag?"COOKIE":"NO COOKIE"
}
function concatenate(str1:string,str2:string){
    return str1+str2
}
console.log(getCookie(true).toLowerCase())
console.log(add(1,2))
console.log(username("max",786))
console.log(greet("MAX"))
console.log(concatenate("hey","JUDE"))

const greet1="hello"
let greet2="hello"

function findSquare(val:string|number):number{
    if(typeof val==="string"){
        let value=Number(val)
        return value*value
    }
    else return val*val
}
console.log(findSquare("12"))
console.log(findSquare(12))
