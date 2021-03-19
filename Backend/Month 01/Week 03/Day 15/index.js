const express = require("express"); // Import express
const app = express(); // Make express app
const helloRoute = require("./routes/helloRoute"); // Import HelloRoute

/* If user go to http://localhost:3000
it will go here */
app.use("/", helloRoute);

// This is port for this server
app.listen(3000, () => console.log("Server running on 3000!/(port 3000)"));
// run node index.js di terminal vs code
// di postmant baru bisa di send
// 3000 adalah port
