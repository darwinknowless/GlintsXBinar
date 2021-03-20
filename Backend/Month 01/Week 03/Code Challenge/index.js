const express = require("express");
const app = express();
const helloRoute = require("./routes/helloRoute");
const port = 3000;

app.use("/", helloRoute);

app.listen(port, () => {
    console.log("Server is at http://localhost:3000/darwin");
});
