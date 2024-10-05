//length
// @ts-ignore
let fruits: string[] = ["apple", "banana", "cherry"];
console.log("length: "+fruits.length); // 3

fruits.push("date");
console.log("push: "+fruits); // ['apple', 'banana', 'cherry', 'date']


let lastFruit = fruits.pop();
console.log("deleted element pop: "+lastFruit); // 'date'
console.log("after pop: "+fruits); // ['apple', 'banana', 'cherry']


//remove first element
let firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log("shift: "+fruits); // ['banana', 'cherry']


//unshift add one or more element first position
fruits.unshift("apricot");
console.log(fruits); // ['apricot', 'banana', 'cherry']


//concat merge two or more array
let moreFruits: string[] = ["fig", "grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apricot', 'banana', 'cherry', 'fig', 'grape']

let citrusFruits = allFruits.slice(1, 3);
console.log("slice: "+citrusFruits); // ['banana', 'cherry']


allFruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Outputs:
// 0: apricot
// 1: blueberry
// 2: kiwi
// 3: fig
// 4: grape

let fruitLengths = allFruits.map(fruit => fruit.length);
console.log("map: "+fruitLengths); // [7, 9, 4, 3, 5]

let longFruits = allFruits.filter(fruit => fruit.length > 5);
console.log("filter: "+longFruits); // ['apricot', 'blueberry']

let totalLength = allFruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log("reduce: "+totalLength); // Total length of all fruit names

let foundFruit = allFruits.find(fruit => fruit.startsWith('b'));
console.log("find: "+foundFruit); // 'blueberry'

let hasBerry = allFruits.some(fruit => fruit.includes('berry'));
console.log("some: "+hasBerry); // true

let allHaveFiveChars = allFruits.every(fruit => fruit.length === 5);
console.log("every: "+allHaveFiveChars); // false

let includesKiwi = allFruits.includes("kiwi");
console.log("include: "+includesKiwi); // true

let fruitsString = allFruits.join(", ");
console.log("join: "+fruitsString); // 'apricot, blueberry, kiwi, fig, grape'

allFruits.reverse();
console.log("reverse: "+allFruits); // ['grape', 'fig', 'kiwi', 'blueberry', 'apricot']

allFruits.sort();
console.log("sort: "+allFruits); // Sorted array of fruit names


// @ts-ignore
let numbers: number[] = new Array(5).fill(0);
console.log("fill: "+numbers); // [0, 0, 0, 0, 0]

