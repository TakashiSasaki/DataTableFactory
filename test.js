var dataTable = require("./create.gs").create([["a","b","c"],[1],[2,2],[3,3,3]]);
console.log(dataTable.widths());
console.log(dataTable.header());
console.log(dataTable.getObject());


