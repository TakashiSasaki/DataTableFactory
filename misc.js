function maxWidths_(){
  return this.widths().reduce(function(x,y){return Math.max(x,y);});
}

function header_(){
  if(this.values.length <1) throw "header: values.length < 1.";
  return this.values[0];
}

exports.widths_     = widths_;
exports.maxWidths_  = maxWidths_;
exports.header_     = header_;
