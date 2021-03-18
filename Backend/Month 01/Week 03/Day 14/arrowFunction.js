// Normal function
function calculate(x, y) {
    return x * y;
}

console.log(calculate(10, 11));

// Arrow function
const calc = (x, y) => {
    return x * y;
}

console.log(calc(10, 11));

// Curying function
const calcu = (x) => (y) => (z) => {
    return x * y * z;
}

console.log(calcu(10)(11)(12));