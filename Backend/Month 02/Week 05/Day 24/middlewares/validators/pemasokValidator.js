const validator = require("validator");
const { ObjectId } = require("mongodb");
const connection = require("../../models");
const penjualan = connection.db("penjualan"); // Connect to penjualan database
const pemasok = penjualan.collection("transaksi"); // Connect to transaksi collection / table

exports.create = async (req, res, next) => {
  try {
    // Find Pemasok
    let findData = await Promise.all([
      penjualan.collection("pemasok").findOne({
        _id: new ObjectId(req.params.id),
      }),
    ]);

    // Create errors variable
    let errors = [];

    // Pemasok not found
    if (!findPemasok) {
      errors.push("Pemasok Not Found");
    }

    // Check nama is Alphanumeric
    if (!validator.isAlphanumeric(req.body.nama)) {
      errors.push("Pemasok must be a nama");
    }

    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: e,
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    // Find Pemasok
    let findData = await Promise.all([
      penjualan.collection("pemasok").findOne({
        _id: new ObjectId(req.params.id),
      }),
    ]);

    // Create errors variable
    let errors = [];

    // Pemasok not found
    if (!findPemasok) {
      errors.push("Pemasok Not Found");
    }

    // Check nama is Alphanumeric
    if (!validator.isAlphanumeric(req.body.nama)) {
      errors.push("Pemasok must be a nama");
    }

    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: e,
    });
  }
};
