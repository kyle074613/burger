const connection = require("./connection.js");

const orm = {

    //Gets all values from the databse
    selectAll: function (table, cb) {
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    //Adds a value to the database
    insertOne: function (table, col, val, cb) {
        const queryString = `INSERT INTO ${table} (${col}) VALUES ?`;
        connection.query(queryString, val, function (err, result) {
            if (err) throw err;

            cb(result);
        });


    },

    //Updates a value in the database
    updateOne: function (table, col, val, condition, cb) {
        const queryString = `UPDATE ${table} SET ${col} = ${val} WHERE ${condition}`;

        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;