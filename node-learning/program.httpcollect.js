var http = require('http');
var url = process.argv[2];

// Approache 1 
/*
var outputData = '';
http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        outputData = outputData + data;
    });
    response.on('error', console.error);
    response.on('end', function(){
        console.log(outputData.length);
        console.log(outputData);
    })
}).on('error', console.error)
*/

// Approach 2
var bl = require('bl');
http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        if (err) {
            console.log(0);
            console.log(err);
            return;
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }))
})

// Sample
/*
var http = require('http')
var bl = require('bl')
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})
*/