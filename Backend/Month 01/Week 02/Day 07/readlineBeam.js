// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Step 1 : Bikin Function hitung volum balok/Beam
// Function to calculate beam volume
function beam(length, width, height) {
  return length * width * height;
}

// step 2: Import redline, taroh di paling atas.
// step 3: masukkin funnction input
function input() {
  rl.question("Length: ", (length) => {
    rl.question("Width: ", (width) => {
      rl.question("Height: ", (height) => {
        if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
          console.log(
            `\nBeam: ${beam(
              length, 
              width, 
              height
              )} Cm3`);
          rl.close();
        } else {
          console.log(`The input must be a number\n`);
          input();
        }
      });
    });
  });
}

console.log(`Beam`);
console.log(`=========`);
input()
