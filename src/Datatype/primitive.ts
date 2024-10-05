
//Primitive: string, number, boolean, null, undefined, symbol, bigint
// number
// @ts-ignore
let count: number = 42;
let price: number = 99.99;

console.log("number: "+count);
console.log("number: "+price);

//String
// @ts-ignore
let city: string = "Bangalore";
console.log("String: "+city);

//number
// @ts-ignore
let score: number = 100;
console.log("number: "+score);

//boolean
// @ts-ignore
let isComplete: boolean = true;
console.log("boolean: "+isComplete);

//null: A special value representing "no value".
let emptyValue: null = null;
console.log("null: "+emptyValue);

//undefined: Represents the absence of a value.
let notAssigned: undefined = undefined;
console.log("undefined: "+notAssigned);

//symbol: Represents unique, immutable values primarily used as object property keys.
let sym: symbol = Symbol("uniqueSymbol");
console.log(sym);

//bigint: Represents large integers beyond the safe range for number.
let largeNumber: bigint = 9007199254740991n;
console.log("bigint: "+largeNumber);