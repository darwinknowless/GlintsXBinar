const mongoose = require("mongoose"); //import mongoose

const uri = process.env.MONGO_URI; //add uri mongo atlas

//connect to mongoose
mongoose.connect(uri, {    
    useUnifiedTopology: true, //must be added
    useNewUrlParse: true, //must be added
    useCreateIndex: true, //use to enable unique data type
    useFindAndModify: false, //use findOneAndUpdate instead of findAndModify
})
.then(() => console.log(`MongoDB Connected!`))
.catch((err) => console.log(err));

//import models
const barang = require("./barang");
const pelanggan = require("./pelanggan");
const pemasok = require("./pemasok");
const transaksi = require("./transaksi");

//export models
module.exports = { barang, pelanggan, pemasok, transaksi };