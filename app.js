//command to open app using webstorm
// wstorm app-name


//app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
let dev_db_url = 'mongodb://zeeshan:pakistan12345@cluster0-shard-00-00-a10no.mongodb.net:27017,cluster0-shard-00-01-a10no.' +
    'mongodb.net:27017,cluster0-shard-00-02-a10no.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=' +
    'admin&retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Body Parser is an npm package that is used to parse the incoming request bodies in a middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

