var express = require("express");
var mongoose = require('mongoose');
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var logger = require("morgan");
var routes = require("./routes");
var app = express();
var PORT = process.env.PORT || 3001;

// var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use(logger("dev"));


// Import routes and give the server access to them.

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articles";
mongoose.Promise = Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});


app.listen(PORT, function () {
    console.log("App running on port 3001!");
});