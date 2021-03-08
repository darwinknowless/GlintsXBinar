// Global var
let a = 10;
let message = "Hello World";

// function to change var a
function changeA() {
    a =30;
    console.log(a);
}

// function to change var message
function changeMessage() {
    message = "Hello, Changes!";
    console.log(message);
}

changeA(); // call changeA function
changeMessage(); // all changeMessage function

console.log(a);
console.log(message);