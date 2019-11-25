var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'pass'
    database: 'database_password'
});

connection.connect(function(err) {

    if(err) {
        console.log('Error');
    }
    else {
        console.log('Connected');
    }
})

app.get('/', function(req, res) {

    // about mysql
    connection.query("SELECT * FROM result", function(error, rows, fields){

        // callback
        if(err){
            console.log('query error');
        }
        else {
            console.log('Query ran successfully');
        }
    });
});

app.listen(1337);
