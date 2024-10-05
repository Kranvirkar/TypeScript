let singleQuoteString: string = 'Hello, World!';
let doubleQuoteString: string = "Hello, World!";
let templateString: string = `Hello, World!`;

let str: string = "Hello";
console.log("length: "+str.length); // 5

console.log("charAt: "+str.charAt(0)); // 'H'

console.log("charCodeAt: "+str.charCodeAt(0)); // 72

console.log("indexOf: "+str.indexOf('e')); // 1

console.log("lastIndexOf: "+str.lastIndexOf('o')); // 4

console.log("slice: "+str.slice(1, 4)); // 'ell'

console.log("substring: "+str.substring(1, 4)); // 'ell'

console.log("substr: "+str.substr(1, 3)); // 'ell'

console.log("toLowerCase: "+str.toLowerCase()); // 'hello'

console.log("toUpperCase: "+str.toUpperCase()); // 'HELLO'

let strWithSpaces: string = "   Hello   ";
console.log("trim: "+strWithSpaces.trim()); // 'Hello'

let sentence: string = "Hello, World!";
let words: string[] = sentence.split(" ");
console.log("split: "+words); // ['Hello,', 'World!']

let array: string[] = ['Hello', 'World'];
console.log("join: "+array.join(", ")); // 'Hello, World'

let newStr: string = str.replace("e", "a");
console.log("newStr: "+newStr); // 'Hallo'

console.log("startsWith: "+str.startsWith("He")); // true

console.log("endsWith: "+str.endsWith("lo")); // true

console.log("includes: "+str.includes("ll")); // true

console.log("localeCompare: "+"apple".localeCompare("banana")); // -1 (less than)

console.log("padStart: "+"5".padStart(2, "0")); // '05'

console.log("padEnd: "+"5".padEnd(2, "0")); // '50'

