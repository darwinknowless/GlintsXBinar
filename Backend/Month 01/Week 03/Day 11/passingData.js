const EventEmitter = require('events'); // Import
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const my = new EventEmitter();

// Registering a listener // Event Listener
my.on("Login Failed", (email, password) => {
    // TODO: Saving the login trial count in the database
    console.log(`${email} and ${password} is failed to login!`);
    rl.close();
});
  
my.on("Login Success", (email) => {
   // TODO: Saving the login trial count in the database
   console.log(`${email} is success to login!`);
   require("../../../Month\ 01/Week\ 02/Day\ 10/assignment2.js"); // get link
   // ==> node ../../../Month\ 01/Week\ 02/Day\ 10/assignment2.js
   // copy this link ("../../../Month\ 01/Week\ 02/Day\ 10/assignment2.js")to req 
   // ==> /home/darwin/GlintsXBinar/Backend/Month 01/Week 02/Day 10/Assigment.js
   // ==> ../../../Month\ 01/Week\ 02/Day\ 10/assignment2.js
   rl.close();
});

// Function
function login(email, password) {
    const emailInDatabase = "id.darwins@gmail.com";
    const passwordInDatabase = 123456;
  
    if (email == emailInDatabase && password == passwordInDatabase) {
      my.emit("Login Success", email);
    } else {
      my.emit("Login Failed", email, password);
    }
}

// readline
rl.question("Email: ", (email) => {
    rl.question("Password: ", (password) => {
      login(email, password);
    });
});
  