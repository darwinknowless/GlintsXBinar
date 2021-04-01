const { barang, pelanggan, pemasok, transaksi } = require("../models");

class TransaksiController {
  // Get All
  async getAll(req, res) {
    try {
      // Find all data
      let data = await transaksi.find(); // <---- function find

      // If no data
      if (data.length === 0) {
        return res.status(404).json({
          message: "Transaksi Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new TransaksiController();
