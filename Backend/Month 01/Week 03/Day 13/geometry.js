class Geometry {
    constructor(name, type) {
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