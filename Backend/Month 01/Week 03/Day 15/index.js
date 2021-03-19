const express = require("express");
const app = express();

app.get ("/", (req, res) => {
    console.log("This is my first backend!");
    res.send("Hello, Postman (GET)!");
});

app.post ("/", (req, res) => {
    console.log("This is example POST!");
    res.send("Hello, POST!");
});

app.put ("/", (req, res) => {
    console.log("This is example PUT!");
    res.send("Hello, PUT!");
});

app.delete ("/", (req, res) => {
    console.log("This is example DELETE!");
    res.send("Hello, DELETE!");
});

app.listen(3000, () => console.log("Server running on 3000!/(port 3000)"));
// run node index.js di terminal vs code
// di postmant baru bisa di send