// function to check
function check(value) {
    if (value >= 80) {
        return "A"; // if value >= 80, it will return "A"
    }
    else if (value > 70) {
        return "B"; // if value >= 70, it will return "B"
    }
    else if (value > 60) {
        return "D"; // if value >60 80, it will return "D"
    }
    else {
        return "E"; // if all condition doesnt meet requirement, it will go here
    }    
}

console.log(check(90)); // "A"
console.log(check(75)); // "B"
console.log(check(50)); // "E"