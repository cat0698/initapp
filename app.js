var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

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
});

// Home page
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// On submit route
app.post('/data', function(req, res) {

    // extract sent user info
    let data = 'Jackson Mississippi';
    // req.body.name

    connection.query('SELECT math, physics, chem FROM record WHERE name = "' + data + '";', function(err, rows, fields) {

        // Something went wrong
        if(err){
            console.log('Invalid query');
            throw err;
        }

        // No entries returned
        if (rows < 1) {
            console.log('Name not found');
        }

        // Calculate GPA
        let math = 69 - rows[0].math.charCodeAt(0);
        let physics = 69 - rows[0].physics.charCodeAt(0);
        let chem = 69 - rows[0].chem.charCodeAt(0);

        let gpa = ((math == -1 ? 0 : math) + (physics == -1 ? 0 : physics) + (chem == -1 ? 0 : chem)) / 3;

        res.send("Your GPA is " + gpa);
    });
});

app.listen(8080);
