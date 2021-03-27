//Import database connection
const connection = require("../models");

//GET DATA PEMASOK ALL
const getAllPem = (req, res) => {
  
  //Get all query
  let sql = "SELECT * FROM pemasok";
  
  //Run Query
  connection.query(sql, (err, results) => {
    
    //If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    
    //If no error
    return res.status(200).json({
      message: "Success",
      data: results,
    });
  });
};

//GET DATA PEMASOK ONE
const getOnePem = (req, res) => {
  
  //Get One Query
  let sql = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;
  
  //Run Query
  connection.query(sql, (err, results) => {
    
    //If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    
    //If no error
    return res.status(200).json({
      message: "Success",
      data: results[0],
    });
  });
};

//ADD or CREATE DATA PEMASOK
const createPem = (req, res) => {
  
  //Find pemasok
  let sqlFindPemasok = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;
  
  //Run Query
  connection.query(sqlFindPemasok, (err, results) => {
    
    //Create pemasok
    let sqlCreate = `INSERT INTO pemasok(nama) VALUES ( ${req.body.nama} )`;
    
    //Run Query
    connection.query(sqlCreate, (err, results) => {
      
      //If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }
      
      //If no error
      let sqlSelect = `SELECT * FROM pemasok WHERE id = ${results.insertId}`;
      
      //Run select
      connection.query(sqlSelect, (err, results) => {
        
        //If error
        if (err) {
          return res.status(500).json({
            message: "Internal Server Error",
            error: err,
          });
        }
        
        //If no error
        return res.status(201).json({
          message: "Success",
          data: results[0],
        });
      });
    });
  });
};

//UPDATE DATA PEMASOK
const updatePem = (req, res) => {
  
  //Find pemasok by ID
  let sqlFindPemasok = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;
  
  //Run Query
  connection.query(sqlFindPemasok, (err, results) => {
    
    //Run query update
    let sqlUpdate = `UPDATE pemasok SET nama = ${req.body.nama} WHERE id = ${req.params.id}`;
    
    //let sqlUpdate = `UPDATE pemasok SET id = ${req.params.id}, nama = ${req.body.nama} WHERE id = ${req.params.id}`;
    connection.query(sqlUpdate, (err, results) => {
      
      //If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }
      
      //If no error
      let sqlSelect = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;
      
      //Run select
      connection.query(sqlSelect, (err, results) => {
        
        //If error
        if (err) {
          return res.status(500).json({
            message: "Internal Server Error",
            error: err,
          });
        }
        
        //If no error
        return res.status(201).json({
          message: "Success",
          data: results[0],
        });
      });
    });
  });
};

//DELETE DATA PEMASOK
const deletePem = (req, res) => {
  
  //Delete Query
  let sql = `DELETE FROM pemasok WHERE id = ${ req.params.id }`;
  
  //Run Query
  connection.query(sql, [req.params.id], (err, results) => {
    
    //If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    
    //If no error
    return res.status(200).json({
      message: "Success",
    });
  });
};

module.exports = { getAllPem, getOnePem, createPem, updatePem, deletePem };
