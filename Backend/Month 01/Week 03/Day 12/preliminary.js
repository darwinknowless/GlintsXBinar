class Person { // class
    
    static isAlive = true; // Tetap / Static Properties / Properties yang dimiliki semua class
  
    constructor(name, address, isMarried, nickName) { // Properties
      this.name = name; // properties milik object
      this.address = address;
      this.isMarried = isMarried;
      this.nickName = nickName;
    }

    walk() {
        console.log(` ${this.name} is walking!`); // this.name : untuk manggil constructor
    }
    
    run() {
        console.log(` ${this.nickName} is running!`);
    }
}

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
person1.walk();
person2.run();

console.log("========== BATAS ==========");
console.log(person1); // Call all 
console.log(person2);
console.log(person1.name); // example call only name

console.log("========== BATAS ==========");
console.log(person1.isAlive); // Can not call static properties
console.log(Person.isAlive); // Static properties can only call by class directly
