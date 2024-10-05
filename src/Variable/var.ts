
//Function Scope:
function example() {
  if (true) {
    var x = 10;
  }
  console.log("Function Scope: "+x); // 10 (accessible even outside the block)
}

//Hoisting:
//console.log("Hoisting: "+a); // undefined
var a = 5;      // Declaration is hoisted, but initialization happens here.
console.log("Hoisting: "+a);

//re-declared:
var a = 1;
var a = 2; // No error, re-declared
console.log("re-declared: "+a);

//Not Block Scoped:
for (var i = 0; i < 3; i++) {
  console.log("Inside "+i); // 0, 1, 2
}
console.log("Outside "+i); // 3 (accessible outside the loop block)



