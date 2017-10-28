var express = require('express');
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use('/', routes);

app.listen(port);
