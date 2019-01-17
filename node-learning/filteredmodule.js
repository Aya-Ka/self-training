var fs = require('fs');
var path = require('path');

module.exports = function(filePath, extension, callback) {
    fs.readdir(filePath, 'utf8', function(err, files) {
        if(err) return callback(err);
        var filteredList = [];
        files.forEach(function(f) {
            if (path.extname(f) === '.' + extension) {
                filteredList.push(f);
            }
        })
        callback(null, filteredList);
    })
}

// Sample
/* 
_/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution_filter.js_ :

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err)
        }
        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })
        callback(null, list)
    })
}
*/