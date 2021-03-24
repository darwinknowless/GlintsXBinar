const mysql = require("mysql2");

const connection =
mysql.createConnection({
    host: "localhost",
    user: "darwin",
    password: "12345678",
    database:
    "penjualan",
});

module.exports = connection;