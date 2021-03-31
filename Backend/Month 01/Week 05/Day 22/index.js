//Import dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}); //Config environment

//Import express
const express = require("express"); 

//Import router
const transaksiRoutes = require("./routes/transaksiRoutes");

//Make express app
const app = express();

//Enable body parser
app.use(express.json()); //Enable json body
app.use(
  express.urlencoded({
    extended: true,
  })
); //support encoded bodies

//Make routes
app.use("/transaksi", transaksiRoutes);

//Running server
let PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}!`));
