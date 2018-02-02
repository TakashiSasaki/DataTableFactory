function asObject_(){
  var tmp = {"":{}};
  for(var i=0; i<this.hierValues.length; ++i){
    var o = tmp;
    var p = "";

    for(var j=0; j<this.hierHeader.length; ++j) {
      if(this.hierValues[i][j] === "") continue;
      o = o[p];
      p = this.hierValues[i][j];
      if(typeof o[p] === "undefined") {
        o[p] = {};
      }
    }

    if(!(o[p] instanceof Array)) o[p]=[];

    var q = {};
    for(var j=0;j<this.leafValues[i].length; ++j) {
      if(typeof q[this.leafHeader[j]] === "undefined"){
        q[this.leafHeader[j]] = [];
      }//if
      q[this.leafHeader[j]].push(this.leafValues[i][j]);
    }//for

    for(;j<this.leafValues[i].length; ++j) {
      if(typeof q[""] === "undefined") {
        q[""] = [];
      }
      q[""].push(this.values[i][j]);
    }
    o[p].push(q);
  }//for
  return tmp[""];
}//asObject

exports.asObject_ = asObject_;

