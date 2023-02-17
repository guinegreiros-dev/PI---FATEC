const mysql = require('mysql2/promise');

module.exports = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "admin",
    port:"3306",
    database:"gestao_estoque"
});

