// Normal function
function calculate(x, y) {
    return x * y;
}

console.log(calculate(10, 11));

// Arrow function - > sering di pakai di Frontend react
const calc = (x, y) => {
    return x * y;
}

console.log(calc(10, 11));

// Curying function
const calcu = (x) => (y) => (z) => {
    return x * y * z;
}

console.log(calcu(10)(11)(12));

// Arrow function return
const cal = (x, y) => x * y; // => x * y adalah return dari cal 