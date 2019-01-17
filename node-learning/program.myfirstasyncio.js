var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', logResultLine);

function logResultLine(err, fileData) {
    if(err) throw err;
    console.log(fileData.split('\n').length - 1);
}

//  Sample code from learnyounode
/*
var fs = require('fs')
var file = process.argv[2]
fs.readFile(file, function (err, contents) {
    if (err) {
        return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
}*/