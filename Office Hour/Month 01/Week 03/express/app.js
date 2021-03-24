const express = require("express");
const app = express();

let PORT = 5000;

// HTTP Method
// POST - CREATE
// GET - READ
// PUT - UPDATE
// DELETE - DELETE

app.use("/", (req, res) => res.send("Tes"));
app.listen(PORT, () => console.log(`Server Listening to ${PORT}`));
