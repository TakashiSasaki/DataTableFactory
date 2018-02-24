function getAsValues_(){
  if(typeof this.object !== typeof {}) throw "toValues: no object";
  this.hierHeader = [];
  this.hierValues= [];
  this.leafHeader = [];
  this.leafValues = [];
  a_.call(this, [], this.object);
  var values = [this.hierHeader.concat(this.leafHeader)];
  for(var i=0; i<this.hierValues.length; ++i) {
    values.push(this.hierValues[i].concat(this.leafValues[i]));
  }
  return values;
}

function a_(path, o){
  console.log("a_: path = " + path);
  console.log("a_: o = " + o);
  if(o instanceof Array) {
    b_.call(this, path.concat(), o);
  } else {
    if(!(o instanceof Object)) throw "a: o is not an instance of Object.";
    this.hierHeader.push("");
    for(var i in o) {
      a_.call(this, path.concat([i]), o[i]);
    }//for
  }//if 
}//function a_

function b_(path, leafObjects) {
  if(!(leafObjects instanceof Array)) 
    throw "b: leafObjects is not an instance of Array.";
  for(var i=0; i<leafObjects.length; ++i) {
    var row = [];
    if(leafObjects[i] === null) throw "b: leafObjects[i] is null.";
    if(leafObjects[i] instanceof Array) 
      throw "b: leafObjects[i] is an instance of Array."; 
    if(!leafObjects[i] instanceof Object) 
      throw "b: leafObjects[i] is not an instance of Object.";
    if(Object.keys(leafObjects[i]).length === 0) {
      this.hierValues.push(path);
      this.leafValues.push(row);
      continue;
    }
    for(var j in leafObjects[i]){
      console.log("b_: leafObjects[i][j] = " + leafObjects[i][j]);
      if(leafObjects[i][j] === null) throw "b: leafObjects[i][j] is null.";
      if(!(leafObjects[i][j] instanceof Array)) 
        throw "b: leafObjects[i][j] is not an instance of Array.";
      if(leafObjects[i][j].length === 0) {
        var indices = headerIndices_.call(this, j);
        if(indices.length === 0) {
          this.leafHeader.push(j);
        }
        this.hierValues.push(path);
        this.leafValues.push(row);
      } else {
        for(var k=0; k<leafObjects[i][j].length; ++k) {
          var indices = headerIndices_.call(this, j);
          if(k<indices.length){
            row[indices[k]] = leafObjects[i][j][k];
          } else {
            this.leafHeader.push(j);
            row[this.leafHeader.length-1] = leafObjects[i][j][k];
          }
        }//for k
      }//if
      this.hierValues.push(path);
      this.leafValues.push(row);
    }//for j
  }//for i
}//function b

function headerIndices_(name){
  var indices = [];
  for(var i=0; i<this.leafHeader.length; ++i) {
    if(this.leafHeader[i] === name) indices.push(i)
  }
  return indices;
}

exports.getAsValues_ = getAsValues_;

