var fm = require('./filteredmodule.js');
var filePath = process.argv[2]
var extension = process.argv[3]

fm(filePath, extension, function(err, fileList){
    if(err) {
        console.log(err);
    }
    fileList.forEach(function(fileName){
        console.log(fileName);
    })
})

// Sample 
/* 
_/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution.js_ :

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err) {
        return console.error('There was an error:', err)
    }
    list.forEach(function (file) {
        console.log(file)
    })
})


*/