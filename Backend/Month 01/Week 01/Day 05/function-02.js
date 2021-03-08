//function with argument and return
function f(x) {
    let result = x + 1;
    console.log("This is result")
    
    return result;
    console.log("Skip")
}

let resultf = (5); //It will be printed
console.log(resultf);

//Function with argument and no-return
function z(x) {
    let result = x + 1;
    console.log("This is result")

    console.log(result);
}

z(7); //will be printed 8
let resultz= z(7); //undefined
console.log(resultz); //undefined
