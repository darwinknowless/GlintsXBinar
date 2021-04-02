const { ObjectId } = require("mongodb"); // Import ObjectId
const connection = require("../models");
const dbConnection = connection.db("penjualan"); // Connect to database penjualan
const pemasok = dbConnection.collection("pemasok");

class PemasokController {
  // TODO Get All Data
  async getAll(req, res) {
    try {
      let data = await pemasok.find({}).toArray();
      // If no data
      if (data.length === 0) {
        return res.status(404).json({
          message: "Pemasok Not Found",
        });
      }
      // If success
      return res.status(200).json({
        message: "Success Show All Pemasok",
        data,
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // TODO One Data
  async getOne(req, res) {
    try {
      // Find one data
      let data = await pemasok.findOne({
        _id: new ObjectId(req.params.id),
      });
      // If data is null
      if (data.length === 0) {
        return res.status(404).json({
          message: "Data Pemasok Not Found",
        });
      }
      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      console.log(e);
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // TODO Create Data
  async create(req, res) {
    try {
      // Insert data pelanggan
      let data = await pemasok.insertOne({
        nama: req.body.nama,
      });

      // If success
      return res.status(200).json({
        message: "Success",
        data: data.ops[0],
      });
    } catch (e) {
      console.log(e);
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // TODO Update Data
  async update(req, res) {
    try {
      // Update data pelanggan
      await pemasok.updateOne(
        {
          _id: new ObjectId(req.params.id),
        },
        {
          $set: {
            nama: req.body.nama,
          },
        }
      );

      // Find data that updated
      let data = await pemasok.findOne({
        _id: new ObjectId(req.params.id),
      });

      // If data is null
      if (data === null) {
        return res.status(404).json({
          message: "Data Pemasok Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
  // TODO Delete Data
  async delete(req, res) {
    try {
      // delete data depends on req.params.id
      let data = await pemasok.deleteOne({
        _id: new ObjectId(req.params.id),
      });

      // If data deleted is null
      if (!data) {
        return res.status(404).json({
          message: "Pemasok Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success to delete pemasok",
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new PemasokController();
