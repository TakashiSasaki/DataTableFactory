function factory_(values){
  this.values = values;
  this.widths = widths_;
  this.maxWidths = maxWidths_;
  this.header = header_;
  this.getObject = getObject_;
}

function widths_(){
  var widths = [];
  for(var i=0; i<this.values.length; ++i){
    var row = this.values[i];
    widths[i] = row.length;
  }
  return widths;
}

function maxWidths_(){
  return this.widths().reduce(function(x,y){return Math.max(x,y);});
}

function header_(){
  if(this.values.length <1) throw "header: values.length < 1.";
  return this.values[0];
}

function getObject_(){
  var result = {"":{}};
  var header = this.header();
  for(var i=1; i<this.values.length; ++i){
    var o = result;
    var p = "";

    for(var j=0; j<header.length; ++j) {
      if(header[j].length > 0) break;
      o = o[p];
      p = this.values[i][j];
      if(typeof o[p] === "undefined") {
        o[p] = {};
      }
    }

    if(!(o[p] instanceof Array)) o[p]=[];

    var q = {};
    for(;j<header.length; ++j) {
      if(typeof q[header[j]] === "undefined")
        q[header[j]] = [];
      q[header[j]].push(this.values[i][j]);
    }

    for(;j<this.values[i].length; ++j) {
      if(typeof q[""] === "undefined") 
        q[""] = [];
      q[""].push(this.values[i][j]);
    }
    o[p].push(q);
  }//for
  return result[""];
}//getObject

/**
 @param {any[][]} values
 @return {DataTableInstance}
 */
function create(values){
  return new factory_(values);
}

if(typeof exports === "undefined") exports = {};
exports.create = create;

