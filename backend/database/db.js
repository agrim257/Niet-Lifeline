const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Agrim@257", // Write your MySQL password here
    database: "niet_lifeline"
});

connection.connect((err) => {

    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
        return;
    }

    console.log("Database Connected Successfully");

});

module.exports = connection;