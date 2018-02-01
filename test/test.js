"use strict";
var fs = require("fs");
var CsvParser = require("../../csvParser/CsvParser.js");
var DataTable = require("../DataTable.js");

var values1 = [["a","b","c"],[1],[2,2],[3,3,3]];
var dataTable1 = DataTable.create(values1);
console.log(dataTable1.widths());
console.log(dataTable1.header());
console.log(dataTable1.asObject());

CsvParser.csvDocument("abc");
fs.readFile("./test1.csv", "utf8", function(err, data){
  var values = CsvParser.csvDocument(data);
  var dataTable = DataTable.create(values);
  console.log(JSON.stringify(dataTable.asObject(), undefined, 2));
});

fs.readFile("./test2.csv", "utf8", function(err, data) {
  var values = CsvParser.csvDocument(data);
  var dataTable = DataTable.create(values);
  console.log(JSON.stringify(dataTable.asObject(), undefined, 2));
});

