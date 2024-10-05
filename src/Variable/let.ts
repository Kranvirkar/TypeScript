
// without type
let message = "Hello, TypeScript!"; // Inferred type: string
// @ts-ignore
let count = 42;                     // Inferred type: number
let isActive = true;                // Inferred type: boolean

console.log("message "+message);
console.log("count "+count);
console.log("isActive "+isActive);

// with Type
let age: number = 30;
let isAuthenticated: boolean = false;

console.log("isAuthenticated "+isAuthenticated);
console.log("age "+age);


//All Data Type
//String
// @ts-ignore
let city: string = "Bangalore";

//number
// @ts-ignore
let score: number = 100;

//boolean
// @ts-ignore
let isComplete: boolean = true;

//array
let scores: number[] = [10, 20, 30];
let names: string[] = ["Alice", "Bob"];
let user: [string, number] = ["Kiran", 25];

//any
let randomValue: any = "Hello";
randomValue = 42;

//Union Types
let identifier: string | number = 101;  // Can be either string or number
identifier = "ID_101";

// object
// @ts-ignore
let person: { name: string; age: number } = {
  name: "Kiran",
  age: 25
};
console.log(person)