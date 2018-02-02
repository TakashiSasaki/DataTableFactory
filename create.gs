function factory_(valuesOrObject){
  this.hierValues = undefined;
  this.hierHeader = undefined;
  this.leafValues = undefined;
  this.leafHeader = undefined;
//  if(valuesOrObject instanceof Array){
//    this.values = valuesOrObject;
//    this.object = undefined;
//  } else if(valuesOrObject instanceof Object) {
//    this.object = valuesOrObject;
//    this.values = undefined;
//  } else {
//    throw "factory: expects array of array or object.";
//  }
 // this.widths         = require("./misc.js").widths_;
 // this.maxWidths      = require("./misc.js").maxWidths_;
 // this.header         = require("./misc.js").header_;
  this.asObject       = require("./v2o.js").asObject_;
  this.toObject       = require("./v2o.js").toObject_;
  this.toValues       = require("./o2v.js").toValues_;
  this.asValues       = require("./o2v.js").asValues_;
  this.headerIndices  = require("./o2v.js").headerIndices_;
  this.a              = require("./o2v.js").a_;
  this.b              = require("./o2v.js").b_;
  this.fromValues     = fromValues_;
  this.fromObject     = fromObject_;
}

function fromValues_(values){
  this.object = undefined;
  this.hierValues = [];
  this.leafValues = [];
  if(!values instanceof Array) throw "fromValues: values is not an array.";
  var nHier = 0;
  for(var i=0; i<values[0].length; ++i){
    if(values[i] === "") ++nHier;
  }
  this.hierHeader = values[0].slice(0, nHier);
  this.leafHeader = values[0].slice(nHier);
  for(var j=1; j<values.length; ++j) {
    this.hierValues.push(values[j].slice(0,nHier));
    this.leafValues.push(values[j].slice(nHier));
  }
}//method fromValues

function fromObject_(object) {
  this.hierValues = undefined;
  this.leafValues = undefined;
  this.hierHeader = undefined;
  this.leafHeader = undefined;
  this.object = object;
}//method fromObject


/**
 @param {any[][]} values
 @return {DataTableInstance}
 */
function create(values){
  var instance = new factory_(values);
  if(values instanceof Array) {
    instance.fromValues(values);
  } else if(values instanceof Object) {
    instance.fromObject(values);
  }
  return instance;
}

if(typeof exports === "undefined") exports = {};
exports.create = create;

