var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2]
var extension = process.argv[3]
if (extension.startsWith('.')) {
    extension = extension.substr(1, extension.length - 1);
}

fs.readdir(dirPath, 'utf8', function(err, files){
    if(err) return console.log(err);
    files.forEach(function(value) {
        if (path.extname(value) != '' && path.extname(value) === '.' + extension) {
            console.log(value);
        }
    })
})

// Sample
/*
var fs = require('fs')
var path = require('path')    
var folder = process.argv[2]
var ext = '.' + process.argv[3]
    
fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})
*/