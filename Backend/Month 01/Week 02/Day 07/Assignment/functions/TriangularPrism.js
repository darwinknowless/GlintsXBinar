// Import readline
const index = require("../index"); // Import index to run rl on this file

// Function to calculate volume of triangular prism
function volumeTriangularPrism(length, width, heigh) {
    return (length * width * heigh) / 2
} 

function inputLength() {
    index.rl.question(`Length: `, (length) => {
        if (!isNaN(length)) {
            inputWidth(length);
        } else {
            console.log(`Length must be number\n`)
            inputLength()
        }
    } )
}

function inputWidth(length) {
    index.rl.question(`Width: `, (width) => {
        if (!isNaN(width)) {
            inputHeigh(length, width)
        } else {
            console.log(`Width must be number\n`)
            inputWidth(length)
        }
    })
}

function inputHeigh(length, width) {
    index.rl.question(`Heigh: `, (heigh) => {
        if (!isNaN(heigh)) {
            console.log(`\nvolumeTringularPrism: ${volumeTriangularPrism(length, width, heigh)}\n`)
            index.rl.close()
        } else {
            console.log(`Heigh must be number\n`)
            inputHeigh(length, width)
        }
    })

}

module.exports = { inputLength }; 
