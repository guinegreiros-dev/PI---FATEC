const mysql = require('mysql2/promise');

module.exports = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "1234",
    port:"3306",
    database:"gestao_estoque"
});

