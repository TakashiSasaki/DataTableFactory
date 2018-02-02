function factory_(){
  this.hierValues   = undefined;
  this.hierHeader   = undefined;
  this.leafValues   = undefined;
  this.leafHeader   = undefined;
  this.getAsObject  = require("./v2o.js").getAsObject_;
  this.getAsValues  = require("./o2v.js").getAsValues_;
  this.setValues    = setValues_;
  this.setObject    = setObject_;
}

function setValues_(values){
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

function setObject_(object) {
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
function create(valuesOrObject){
  var instance = new factory_();
  if(valuesOrObject instanceof Array) {
    instance.setValues(valuesOrObject);
  } else if(valuesOrObject instanceof Object) {
    instance.setObject(valuesOrObject);
  }
  return instance;
}

if(typeof exports === "undefined") exports = {};
exports.create = create;

