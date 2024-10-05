//Non-Primitive: object, array, tuple, enum, void, never, any, unknown

//Array
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];

let fruits: Array<string> = ["apple", "banana"];

console.log("Array: "+numbers);
console.log("Array: "+strings);
console.log("Array: "+fruits);

//tuple
// @ts-ignore
let person: [string, number] = ["Kiran", 30];  // String, followed by a number

console.log("tuple: "+person);

//Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Left;

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
let colorChoice: Color = Color.Green;

console.log("enum: "+colorChoice);
console.log("enum: "+move);


//Object
let person1: { name: string; age: number } = { name: "Kiran", age: 30 };
console.log("Object: "+person1);
console.log("Object: "+person1.name);