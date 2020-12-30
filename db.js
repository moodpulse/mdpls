const mysql = require('mysql');

const connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);

connection.connect();

module.exports = connection;
