const { ObjectId } = require("mongodb"); //Import ObjectId
const connection = require("../models");
const dbConnection = connection.db("penjualan"); //conn to penjualan database
const transaksi = dbConnection.collection("transaksi"); //conn to transaksi collection/table

class TransaksiController {
  
  //Get All
  async getAll(req, res) {
    try {
      let data = await transaksi.find({}).toArray(); //find all transaksi

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
  async getOne(req, res) {
    try {
      //Find one data
      let data = await transaksi.findOne({
        _id: new ObjectId(req.params.id),
      });

      //If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      //If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  //Create
  async create(req, res) {
    try {
      //Insert data transaksi
      let data = await transaksi.insertOne({
        barang: req.body.barang,
        pelanggan: req.body.pelanggan,
        jumlah: req.body.jumlah,
        total: req.body.total,
      });

      //If success
      return res.status(200).json({
        message: "Success",
        data: data.ops[0],
      });
    } catch (e) {
      console.log(e);
      //If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  //Update
  async update(req, res) {
    try {
      //Update data transaksi
      await transaksi.updateOne(
        {
          _id: new ObjectId(req.params.id),
        },
        {
          $set: {
            barang: req.body.barang,
            pelanggan: req.body.pelanggan,
            jumlah: req.body.jumlah,
            total: req.body.total,
          },
        }
      );

      //Find data that updated
      let data = await transaksi.findOne({
        _id: new ObjectId(req.params.id),
      });

      //If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      //If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  //Delete
  async delete(req, res) {
    try {
      //delete data depends on req.params.id
      let data = await transaksi.deleteOne({
        _id: new ObjectId(req.params.id),
      });

      //If success
      return res.status(200).json({
        message: "Success to delete transaksi",
      });
    } catch (e) {
      //If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new TransaksiController();
