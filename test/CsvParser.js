assert=require("assert");
var CsvParser = require("../../csvParser/CsvParser.js");
describe("CsvParser.js", ()=>{
  it("", ()=>{
    assert.equal("abc", CsvParser.csvDocument("abc"));
  });
});


