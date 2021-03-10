/* first way */
// declration variable
let c=5;
let d=5;

let result; // declare result

if (c==d) {
    // if c == d, go here
    result = "c is equal to d!";
}

console.log(result); // print result

/* first way */
result = c == d && "c is equal to d!";

console.log(result);
