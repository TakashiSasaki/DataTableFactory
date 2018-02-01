function factory_(values){
  this.values = values;
  this.widths = widths_;
  this.maxWidths = maxWidths_;
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

/**
 @param {any[][]} values
 @return {DataTableInstance}
 */
function create(values){
  return new factory_(values);
}

if(typeof exports === "undefined") exports = {};
exports.create = create;

