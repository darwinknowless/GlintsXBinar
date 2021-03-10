// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to declare CUBE Volume
function calculateTubeVolume(radius, height) {
    return Math.PI * Math.pow(2, radius) * height;
}

function inputRadius() {
    rl.question("Radius: ", (radius) => {
        if (!isNaN(radius)) {
            inputHeight(radius);
        } else {
            console.log("Radius must be number! \n");
            inputRadius();
        }
    });
}

function inputHeight(saveRadius) {
    rl.question("Height: ", (height) => {
        if (!isNaN(height)) {
            console.log("The volume is: " ${calculateTubeVolume(radius, height)});
            rl.close();
        } else {
            console.log("Height must be number! \n");
            inputHeight(radius);
        }
    });
}

console.log(`Cube`);
console.log(`=========`);
inputRadius();