class Geometry {
    // Parent constructor
    constructor(name, type) {
        // contains 2 properties
        this.name = name;
        this.type = type;
    }
    // Parent function
    introduce() {
        console.log(`This is geometry`);
    }
}

module.exports = Geometry;
