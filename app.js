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
    let data = req.body.name;

    // Case of a submit without input
    if (data == ''){
        console.log('Name is empty string');
        res.send('Please input a name');
        return;
    }

    connection.query('SELECT math, physics, chem FROM record WHERE name = "' + data + '";', function(err, rows, fields) {

        // Something went wrong
        if(err){
            console.log('Invalid query');
            throw err;
        }

        // No entries returned
        if (rows < 1) {
            console.log('Query returned empty set');
            res.send('Sorry, name not found');
            return;
        }

        // Calculate GPA by converting into numerical values
        // If grade is an F, result will be -1
        let math = 69 - rows[0].math.charCodeAt(0);
        let physics = 69 - rows[0].physics.charCodeAt(0);
        let chem = 69 - rows[0].chem.charCodeAt(0);

        // If -1 (F), use 0 
        let gpa = ((math == -1 ? 0 : math) + (physics == -1 ? 0 : physics) + (chem == -1 ? 0 : chem)) / 3;

        gpa = Math.round(gpa * 100) / 100

        res.send("Your GPA is " + gpa);
    });
});

app.listen(8080);
