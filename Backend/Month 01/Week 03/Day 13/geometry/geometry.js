class Geometry {
    constructor(name, type) {
    // Abstract class : Kelas Abstract tidak bisa di declare tapi bisa menjadi parents
    if (this.constructor == Geometry) {
        throw new Error("Can not declare object!");
    }
        this.name = name;
        this.type = type;
    }

    introduce() {
        this.#accessIntroduce();
    }

    // Private function
    #accessIntroduce() {
        console.log("This is Geometry");
    }
}

module.exports = Geometry;
// agar class Geometry bisa di pakai oleh file lain