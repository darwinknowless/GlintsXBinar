// variable
// data types
// function

// var, let, const
// declaration
// assignment

// -----VARIABLE---------
var a;
a = 2; // re-assign
var a = 3; // re-declare
console.log(a, "----a");

let b;
b = 2; // re-assign
let b2 = 3; // NO re-declare
console.log(b, "---b");

const Pi = 3.14;
// Pi = 3.25; // NO re-assign
// const Pi = 3.2; // NO re-declare
console.log(Pi, "---Pi");

// -----DATA TYPE---------
// Dynamic Type Language vs Strict Type Language
let x = "a"; // string
console.log(typeof x, "---before");
x = 1; // number
console.log(typeof x, "---after");
let y = 1; // number
let z = true; // boolean, truthy & falsy value
let f = null; // null

// built-in method
let num = 1 + Number("1"); // "11"
console.log(num, "--num", typeof num);

console.log("Karina".substr(0, 4));

// -----FUNCTION---------
// DRY vs WET
// Do not Repeat Yourself vs Write Everything Twice

let num1 = 1;
let num2 = 2;
let num3 = 3;

// calculator
console.log(num1 + num2 + num3 - num1 + num2 - num1 + num2);

// let sum = function () {}; // declaration

// expression
function sum(x, y, z) {
  let tempValue = x + y + z - x + y - x + y;

  return tempValue / 10;
  console.log("GA BAKAL JALAN INI");
  x + y;
}

let sol = sum(num1, num2, num3);
console.log(sol, "---sol");

function A(x) {
  let sum = 1 + 2 + 3 + 4 + 5;

  return "Deddy";
  return "A";
}

console.log(A("n"));