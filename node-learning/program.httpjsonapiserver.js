var http = require('http');
var url = require('url');
var Readable = require('stream').Readable;

var port = process.argv[2];

function handleHttpRequest(path) {
    var isoDate = new Date(path.split('=')[1]);
    if (path.includes('/api/parsetime?') == true) {
        return JSON.stringify( {
            "hour": isoDate.getHours(),
            "minute": isoDate.getMinutes(),
            "second": isoDate.getSeconds()
        })

    }
    else if (path.includes('/api/unixtime') == true) {
        return JSON.stringify({ "unixtime": isoDate.getTime() });
    }
  
    return JSON.stringify({});
}

var server = http.createServer(function(req, res) {
    console.log((new Date).getTime());
    if (req.method !== 'GET') {
        return res.end('send me a GET\n')
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    var responseStr = handleHttpRequest(url.parse(req.url).path);
    res.end(responseStr);
});

server.listen(port);

// Sample
/*

var http = require('http')
var url = require('url')
    
function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}
    
function unixtime (time) {
    return { unixtime: time.getTime() }
}
    
var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result
    if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
    }
    
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(Number(process.argv[2]))
*/