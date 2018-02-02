"use strict";
var fs = require("fs");
var CsvParser = require("../../csvParser/CsvParser.js");
var DataTable = require("../DataTable.js");

var values1 = [["a","b","c"],[1],[2,2],[3,3,3]];
var dataTable1 = DataTable.create();
dataTable1.fromValues(values1);
console.log(dataTable1.asObject());

CsvParser.csvDocument("abc");
var csv1 = fs.readFileSync("./test1.csv", "utf8");
var csv1Values = CsvParser.csvDocument(csv1);
var csv1DataTable = DataTable.create(csv1Values);
var csv1Json = JSON.stringify(csv1DataTable.asObject());
console.log(csv1Json);

var csv2 = fs.readFileSync("./test2.csv", "utf8");
var csv2Values = CsvParser.csvDocument(csv2);
var csv2DataTable = DataTable.create(csv2Values);
var csv2Json = JSON.stringify(csv2DataTable.asObject());
console.log(csv2Json);

var object1Json = fs.readFileSync("object1.json", "utf8");
var object1 = JSON.parse(object1Json);
var object1DataTable = DataTable.create(object1);
console.log(object1DataTable.asValues());
