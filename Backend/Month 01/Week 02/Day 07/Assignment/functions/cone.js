const index = require("../index"); // Import index to run rl on this file

// Function to calculate cone volume
function calculateConeVolume(radius, height) {
  return (1 / 3) * Math.PI * radius ** 2 * height;
}

/* Way 1 */
// Function for inputing radius of cone
function inputRadius() {
  index.rl.question(`Radius: `, (radius) => {
    if (!isNaN(radius)) {
      inputHeight(radius);
    } else {
      console.log(`Radius must be a number\n`);
      inputRadius();
    }
  });
}

// Function for inputing height of cone
function inputHeight(radius) {
  index.rl.question(`Height: `, (height) => {
    if (!isNaN(height)) {
      console.log(`\nVolume Cone: ${calculateConeVolume(radius, height)}`);
      index.rl.close();
    } else {
      console.log(`Height must be a number\n`); //\n untuk bikin line baru
      inputHeight(radius);
    }
  });
}

module.exports = { inputRadius }; // Export the input, so the another file can run this code
