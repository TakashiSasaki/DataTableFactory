"use strict";
var fs = require("fs");
var CsvParser = require("../../csvParser/CsvParser.js");
var dataTable = require("../create.gs").create([["a","b","c"],[1],[2,2],[3,3,3]]);
console.log(dataTable.widths());
console.log(dataTable.header());
console.log(dataTable.getObject());
CsvParser.csvDocument("abc");
fs.readFile("./test1.csv", "utf8", function(err, data){
  var a = CsvParser.csvDocument(data);
  console.log(a);
});

