// This is object data type
let person = {
    name: "Darwin Knowless",
    address: "Jakarta",
    age: 29,
    isMarried: false,
};

// the first way
console.log("Name: " + person.name); // Darwin Knowless

// alt way
console.log("Address: " +person["address"]); // Jakarta

// if else isMarried
if (person.isMarried == false) {
    // if person is married
    console.log("He's not single!");    
}

else {
    // else it will go here
    console.log("He's still single!");
}