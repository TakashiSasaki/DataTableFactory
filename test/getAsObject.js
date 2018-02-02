var assert = require('assert');
var DataTable = require("../DataTable.js");

var v = [["a","b","c"],[1],[2,2],[3,3,3]];
var vj = JSON.stringify(v);
describe(vj,function(){
  it('aaaaaa', function(){
    var dt = DataTable.create(v);
    var o = dt.getAsObject();
    var j = JSON.stringify(o);
    console.log(j);
  });
});


