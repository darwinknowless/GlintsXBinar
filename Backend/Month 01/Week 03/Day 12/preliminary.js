class Person { // class
    // Static Properties // Properties yang dimiliki semua class
    static isAlive = true; 
    // Constructor & Instance properties
    constructor(name, address, isMarried, nickName) { // Properties
      this.name = name; // properties milik object
      this.address = address;
      this.isMarried = isMarried;
      this.nickName = nickName;
    }

    // Instance method
    walk() {
        console.log(` ${this.name} is walking!`); // this.name : untuk manggil constructor
    }
    // Instance method
    run() {
        console.log(` ${this.nickName} is running!`);
    }

    // Instance method that calling another function
    jogging() {
        this.walk(); // Call Function walk()
        this.run(); // Call Function run();
    }

    // Static method
    static isEating() {
        console.log("Someone is eating!");
    }
}

// Add Instance method outside class
Person.prototype.watch = function () {
    console.log(`${this.name} is watching football match!`);
};

// Add static method class outside class
Person.sleep = function () {
    console.log(`Someone is sleeping!`);
};

let person1 = new Person("Ebit Nagyo", "Medan", true, "Ebit"); // Declare object
let person2 = new Person("Riyo Ginting", "Medan", false, "Riyo"); // Declare object
/* This will create an object like this 
   {
     name: "Ebit Nagyo",
     address: "Medan",
     isMarried: true
     nickName : "Ebit"
   }
*/

console.log("========== BATAS ==========");
// Call all properties
console.log(person1);  
console.log(person2);

console.log("========== BATAS ==========");
// example call only name (one properties)
console.log(person1.name); 

console.log("========== BATAS ==========");
// Instance method
// Harus di deklarasikan sebagai object dulu
person1.walk();
person2.run();

console.log("========== BATAS ==========");
// console.log(person1.isAlive); // Can not call static properties
console.log(Person.isAlive); // Static properties can only call by class directly

console.log("========== BATAS ==========");
// person1.isEating(); // Can not call static method
Person.isEating(); //Static method can only call by class directly
// person1.sleep(); // Can not call static method
Person.sleep(); //Static method can only call by class directly

console.log("========== BATAS ==========");
person1.jogging();
person1.watch();