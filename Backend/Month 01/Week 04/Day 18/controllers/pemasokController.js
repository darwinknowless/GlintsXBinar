// Import database connection
const connection = require("../models");

// Get all data pemasok (id, nama)
const getAllPem = (req, res) => {
  // Get all query
  let sql = "SELECT * FROM pemasok";
  // Run Query
  connection.query(sql, (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    // If no error
    return res.status(200).json({
      message: "Success",
      data: results,
    });
  });
};

// Get one pemasok data (input id)
const getOnePem = (req, res) => {
  // Get One Query
  let sql = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;
  // Run Query
  connection.query(sql, (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    // If no error
    return res.status(200).json({
      message: "Success",
      data: results[0],
    });
  });
};

// Create data pemasok
const createPem = (req, res) => {
  // Find pemasok
  let sqlFindPem = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;
  // Run Query
  connection.query(sqlFindPem, (err, results) => {
    // Create pemasok
    let sqlCreatePem = `INSERT INTO pemasok(nama) VALUES ( ${req.body.nama} )`;
    // Run Query
    connection.query(sqlCreatePem, (err, results) => {
      // If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }
      // If no error
      let sqlSelectPem = `SELECT * FROM pemasok WHERE id = ${results.insertId}`;
      // Run select
      connection.query(sqlSelectPem, (err, results) => {
        // If error
        if (err) {
          return res.status(500).json({
            message: "Internal Server Error",
            error: err,
          });
        }
        // If no error
        return res.status(201).json({
          message: "Success",
          data: results[0],
        });
      });
    });
  });
};

// Update data pemasok
const updatePem = (req, res) => {
  // Find barang to get the price
  // let sqlFindPemasok = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;
  // Run Query
  // connection.query(sqlFindPemasok, (err, results) => {
  let sqlUpdatePem = `UPDATE pemasok SET nama = ${req.body.nama} WHERE id = ${req.params.id}`;
  connection.query(sqlUpdatePem, (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    // If no error
    let sqlSelectPem = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;
    // Run select
    connection.query(sqlSelectPem, (err, results) => {
      // If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }
      // If no error
      return res.status(201).json({
        message: "Success",
        data: results[0],
      });
    });
  });
};
// Delete data pemasok
const deletePem = (req, res) => {
  // Delete Query
  let sql = `DELETE FROM pemasok WHERE id = ${req.params.id}`;
  // Run Query
  connection.query(sql, [req.params.id], (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    // If no error
    return res.status(200).json({
      message: "Success",
    });
  });
};

module.exports = { getAllPem, getOnePem, createPem, updatePem, deletePem };
