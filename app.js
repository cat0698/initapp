var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser);

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'webapp'
});

connection.connect(function(err) {
    if(err) {
        console.log('Error');
        throw err;
    }
    else {
        console.log('Connected');
    }
})

app.get('/', function(req, res) {

    res.sendFile("index.html");

    // // about mysql
    // connection.query("SELECT * FROM result", function(error, rows, fields){

    //     // callback
    //     if(error){
    //         console.log('query error');
    //     }
    //     else {
    //         console.log('Query ran successfully');
    //     }
    // });
});

// query
app.post('/data', function(req, res) {

    // extract sent user info
    let data = req.form.name;

    connection.query('SELECT math, physics, chem FROM result WHERE name = ' + data + ';', function(err, rows, fields) {

        if(err){
            console.log('error');
            throw err;
        }

        console.log(rows);

    });
});

app.listen(8080);
