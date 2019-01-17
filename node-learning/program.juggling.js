var http = require('http');
var bl = require('bl');
var counter = 0
var outputResult = [];

 
function getResult(i) {
    http.get(process.argv[i + 2], function(response) {
        response.pipe(bl(function(err, data) {
            if (err) {
                return console.error(err);
            }
            outputResult[i] = data.toString();
        }))
        response.on('end', function(){
            counter++;
            if (counter === 3) {
                for (var j = 0; j < 3; j++) {
                    console.log(outputResult[j]);
                }
            }
        })
    })
}

for (var i = 0; i < 3; i++) {
    getResult(i);
}



// Sample
/*
var http = require('http')
var bl = require('bl')
var results = []
var count = 0
    
function printResults () {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}
    
function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            results[index] = data.toString()
            count++
            if (count === 3) {
                printResults()
            }
        }))
    })
}
    
for (var i = 0; i < 3; i++) {
    httpGet(i)
}

*/