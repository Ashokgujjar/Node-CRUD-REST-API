const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded : Accept the form-urlencoded data in request
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json : Accept the Row (JSON format) data in request
app.use(bodyParser.json());


//application routes
app.get('/', (req, res) => {
    res.json({"message":"Welcome to Nodecrudapi App"});
});

const employeeRoute = require('./routes/employee.route');

//set employees module routes
app.use('/employeeapi', employeeRoute);

app.listen(3000, () => {console.log("Server is listing to port 3000")});