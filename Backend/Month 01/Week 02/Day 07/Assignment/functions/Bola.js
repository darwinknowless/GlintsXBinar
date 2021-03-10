const index = require("../index"); // Import index to run rl on this file

// function
function ballvolume(radius) {
    return (4 / 3) * Math.PI * radius ** 3;
}

// Function for inputing radius of ballvolume
function inputRadius() {
    index.rl.question(`radius: `, (radius) => {
      if (!isNaN(radius)) {
        inputRadius(radius);
      } else {
        console.log(`Radius must be a number\n`);
        inputRadius();
      }
    });
}

function input() {
    indext.rl.question("Radius: ", (radius) => {
        if (!isNaN(radius)) {
            console.log(`\nballvolume: ${ballvolume(radius)}`);
            index.rl.close();
        } else {
            console.log(`Radius must be a number\n`);
            input();
        }
    });
}

module.exports = { inputRadius }; // Export the input, so the another file can run this code