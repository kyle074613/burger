const mysql = require("mysql");

require("dotenv").config();

console.log(process.env)
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

connection.connect(function (err) {
    if (err) throw err;

    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;