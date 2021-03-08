// global variable
let message = "Hello, World";

// function hello() local function
function hello() {
    let message = "Hello";
    console.log(message);
}

// function world() local function
function world() {
    let message = "World";
    console.log(message);
}

hello(); // call hello function
world(); // call hello function

console.log(message);