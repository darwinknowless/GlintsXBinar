const connection = require("../models");

class TransaksiController {
    
    //Get All
    async getAll(req, res) {
        try {
            const dbConnection = connection.db("penjualan"); // conn to penjualan database
            const transaksi = dbConnection.collection("transaksi"); // conn to transaksi collection/table

            let data =await transaksi.find({}).toArray(); // find all transaksi

            //if no data
            if (data.length === 0) {
                return res.status(404).json({
                    message: "Transaksi not found",
                });
            }

            //if success
            return res.status(200).json({
                message: "Success",
                data,
            });
        } catch (e) {
            //If error
            console.log(e);
            return res.status(500).json({
              message: "Internal Server Error",
              error: e,
            });
        }
    }
    //Get One
    //Create
    //Update
    //Delete
}

module.exports = new TransaksiController();