//"use strict";
//declare function require(x: string): any;
import * as mocha from "mocha";

const fs = require("fs");
const CsvParser = require("../../csvParser/CsvParser.js");
const DataTable = require("../DataTable.js");

describe("read test2.csv", ()=>{
  it("aaaa", ()=>{
    var csv2 = fs.readFileSync("./test2.csv", "utf8");
    var csv2Values = CsvParser.csvDocument(csv2);
    var csv2DataTable = DataTable.create(csv2Values);
    var csv2Object = csv2DataTable.getAsObject();
    var csv2Json = JSON.stringify(csv2Object);
    console.log(csv2Json);
    var csv2Values2 = csv2DataTable.getAsValues();
    console.log(csv2Values2);
  });
});



