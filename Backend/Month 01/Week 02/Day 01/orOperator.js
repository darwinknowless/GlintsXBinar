// declare variable
let a = 1;
let b = 2;

let c = 5;
let d = 5;

console.log(a == b || c == d); // True
console.log(a == b || c == a); // false

// Or
let cd = a == b || [0, 1, 2] || "This new cd"; // it will return to the first true
console.log(cd);

// "&&"" cari yg terakhir true
// "||"" cari yang pertama true