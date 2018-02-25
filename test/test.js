"use strict";
var fs = require("fs");
var CsvParser = require("../../csvParser/CsvParser.js");
var DataTable = require("../DataTable.js");

function test2(){
  var csv1 = fs.readFileSync("./test1.csv", "utf8");
  var csv1Values = CsvParser.csvDocument(csv1);
  var csv1DataTable = DataTable.create(csv1Values);
  var csv1Json = JSON.stringify(csv1DataTable.getAsObject());
  console.log(csv1Json);
}

function test3(){
  var csv2 = fs.readFileSync("./test2.csv", "utf8");
  var csv2Values = CsvParser.csvDocument(csv2);
  var csv2DataTable = DataTable.create(csv2Values);
  var csv2Object = csv2DataTable.getAsObject();
  var csv2Json = JSON.stringify(csv2Object);
  console.log(csv2Json);
  var csv2Values2 = csv2DataTable.getAsValues();
  console.log(csv2Values2);
}

function test4(){
  var object1Json = fs.readFileSync("object1.json", "utf8");
  var object1 = JSON.parse(object1Json);
  var object1DataTable = DataTable.create(object1);
  console.log(object1DataTable.getAsValues());
}

global = this;

function testAll(){
  for(var i in global) {
    var f = global[i];
    var functionName = i;
    if(toString.call(f) !== "[object Function]") continue;
    if(f.test === undefined) continue;
    f.test();
  }
}
testAll.title="Run all tests";

testAll();

exports.test2 = test2;


