/**
  @param {Object} object
  @returns {String[]} Array of property names
*/
function getNames(object){
  var properties = [];
  for(var i in object) {
    properties.push(i);
  }
  return properties;
}

function testGetNames(){
  var propertyNames = getNames({aaa:null,bbb:undefined,1:111,2:222,3:333});
  if(JSON.stringify(["aaa", "bbb", "1", "2", "3"]) !== JSON.stringify(propertyNames)) throw new Error();
}

function test(){
  Logger.log();
}