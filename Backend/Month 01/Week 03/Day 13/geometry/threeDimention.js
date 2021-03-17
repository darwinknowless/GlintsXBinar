const Geometry = require("./geometry");

class ThreeDimention extends Geometry {
    constructor(name) {
        super(name, "3D");
        // Abstract class : Kelas Abstract tidak bisa di declare tapi bisa menjadi parents
        if (this.constructor == Geometry) {
            throw new Error("Can not declare object!");
        }
    }

    // Overridding
    introduce() {
        super.introduce();
        // fungsi "super" manggil function/properti di parents
        console.log(`This is ${this.type}!`);
    }

    calculateArea() {
        console.log(`${this.name} Area!`);
    }

    calculateCircumference() {
        console.log(`${this.name} Circumference`);
    }
}

module.exports = ThreeDimention;