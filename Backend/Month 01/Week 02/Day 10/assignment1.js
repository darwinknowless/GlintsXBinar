/*
*ASSIGNMENT
*Create an array that contains ["tomato", "broccoli", "kale", "cabbage", "apple"]
*Loop the array to print something like this "tomato is a healthy food, it's definitely worth to eat."
*Exclude apple because apple is not a Vegetable.
*/

// Declare array
let veggie = ["tomato", "broccoli", "kale", "cabbage", "apple"];

// manual ways
for (var i = 0; i < veggie.length; i++) {
    console.log(
        `${veggie[i]} is healthy food, it's definitely worth to eat's!`
    );
}
console.log("======================================================================");

// Apple is not veggie
for (var i = 0; i < veggie.length; i++) {
    if (veggie[i] == "apple") {
        console.log("Apple isn't veggie");
    } else {
        console.log(
            `${veggie[i]} is healthy food, it's definitely worth to eat's!`
        );
    }
}

