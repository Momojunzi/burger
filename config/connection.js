var mysql = require('mysql');

var connection = mysql.createConnection({
  poert: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err){
  if(err){
    console.log("error connecting: "+err.stack);
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
