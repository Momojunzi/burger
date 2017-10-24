var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for(var i=0; i < num.length; i++){
    arr.push("?");
  }
  console.log(arr);
  return arr.toString();
}

function objToSql(ob){
  var arr = [];
  for(var key in ob ){
    var value = ob[key];
    if(Object.hasOwnProperty.call(ob, key)){
      if(typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'"+value+"'";
      }
      arr.push(key+ "="+value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, records){
        if(err){
          throw err;
        }
        cb(records);
      });
    },
  insertOne: function(table, cols, vals, cb){
    console.log(vals.length);
    var qMarks = [];
    for(var i=0; i<vals.length; i++){
      qMarks.push("?");
    }
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += qMarks.toString();
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, vals, function(err, records){
      if(err) {
        throw err;
      }
      cb(records);
    });
  },
  //objColVals = what to change and the value.  condition is where value
  updateOne: function(table, condition, cb){
    var queryString = "UPDATE " + table;
    queryString += " SET devoured = 1";
    //queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function(err, records) {
      if(err) {
        throw err;
      }
      cb(records);
    });
  }
};

module.exports = orm;
