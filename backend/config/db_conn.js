// import package
const mysql = require('mysql');

// init connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "kaus@1996",
    database:'sms_2021'
 });

// connect to db
connection.connect((err)=>{
    if(err) {
        console.log('db_conn.js - Error - ', err);
        return;
    }
    console.log('db_conn.js -- Connected to database...');
});

// return connection object
module.exports = connection;