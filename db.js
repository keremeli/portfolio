const mysql = require("mysql2")

var db = mysql.createConnection({
    host: 'localhost',
    database: 'portfolio',
    user: 'root',
    password: 'password'

})

module.exports = db