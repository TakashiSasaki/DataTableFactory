"use strict";
const assert = require("assert");
const fs = require("fs");
var CsvParser = require("../../csvParser/CsvParser.js");
var DataTable = require("../DataTable.js");

describe("read csv", ()=>{
  var csv1 = fs.readFileSync("./test1.csv", "utf8");
  var csv1Values = CsvParser.csvDocument(csv1);
  var csv1DataTable = DataTable.create(csv1Values);
  var csv1Json = JSON.stringify(csv1DataTable.getAsObject());
  console.log(csv1Json);
});


