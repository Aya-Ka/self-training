var fs = require('fs');
var bufferFile = fs.readFileSync(process.argv[2]);
var strFile = bufferFile.toString();
console.log(strFile.split('\n').length - 1);