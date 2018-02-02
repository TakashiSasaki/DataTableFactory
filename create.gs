function factory_(valuesOrObject){
  if(valuesOrObject instanceof Array){
    this.values = valuesOrObject;
    this.object = undefined;
  } else if(valuesOrObject instanceof Object) {
    this.object = valuesOrObject;
    this.values = undefined;
  } else {
    throw "factory: expects array of array or object.";
  }
  this.widths = widths_;
  this.maxWidths = maxWidths_;
  this.header = header_;
  this.asObject = asObject_;
  this.toObject = toObject_;
  this.toValues = toValues_;
  this.asValues = asValues_;
  this.headerIndices = headerIndices_;
  this.a = a_;
  this.b = b_;
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

function toObject_(){
  if(typeof this.values === typeof undefined) throw "toObject: no values";
  this.object = {"":{}};
  var header = this.header();
  for(var i=1; i<this.values.length; ++i){
    var o = this.object;
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
  return this.object[""];
}//toObject

function asObject_(){
  if(typeof this.object === typeof undefined) {
    this.toObject();
  }
  return this.object[""];
}

function toValues_(){
  if(typeof this.object === typeof undefined) throw "toValues: no object";
  this.values = [[]];
  this.a([], this.object);
}

function a_(path, o){
  console.log("a_: path = " + path);
  console.log("a_: o = " + o);
  if(o instanceof Array) {
    this.b(path.concat(), o);
  } else {
    if(!(o instanceof Object)) throw "a: o is not an instance of Object.";
    this.values[0].push("");
    for(var i in o) {
      this.a(path.concat([i]), o[i]);
    }//for
  }//if 
}//function a_

function b_(path, leafObjects) {
  if(!(leafObjects instanceof Array)) 
    throw "b: leafObjects is not an instance of Array.";
  for(var i=0; i<leafObjects.length; ++i) {
    var row = path.concat();
    if(leafObjects[i] === null) throw "b: leafObjects[i] is null.";
    if(leafObjects[i] instanceof Array) 
      throw "b: leafObjects[i] is an instance of Array."; 
    if(!leafObjects[i] instanceof Object) 
      throw "b: leafObjects[i] is not an instance of Object.";
    if(Object.keys(leafObjects[i]).length === 0) {
      this.values.push(row);
      continue;
    }
    for(var j in leafObjects[i]){
      console.log("b_: leafObjects[i][j] = " + leafObjects[i][j]);
      if(leafObjects[i][j] === null) throw "b: leafObjects[i][j] is null.";
      if(!(leafObjects[i][j] instanceof Array)) 
        throw "b: leafObjects[i][j] is not an instance of Array.";
      if(leafObjects[i][j].length === 0) {
        var indices = this.headerIndices(j);
        if(indices.length === 0) {
          this.values[0].push(j);
        }
        this.values.push(row);
      } else {
        for(var k=0; k<leafObjects[i][j].length; ++k) {
          var indices = this.headerIndices(j);
          if(k<indices.length){
            row[indices[k]] = leafObjects[i][j][k];
          } else {
            this.values[0].push(j);
            row[this.values[0].length-1] = leafObjects[i][j][k];
          }
        }//for k
      }//if
      this.values.push(row);
    }//for j
  }//for i
}//function b

function headerIndices_(name){
  var indices = [];
  for(var i=0; i<this.values[0].length; ++i) {
    if(this.values[0][i] === name) indices.push(i)
  }
  return indices;
}

function asValues_(){
  if(typeof this.values === typeof undefined){
    this.toValues();
  }
  return this.values;
}

/**
 @param {any[][]} values
 @return {DataTableInstance}
 */
function create(values){
  return new factory_(values);
}

if(typeof exports === "undefined") exports = {};
exports.create = create;

