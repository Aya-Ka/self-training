net = require('net');
var port = process.argv[2];

function addZeroHead(i) {
    return (i < 10 ? '0' : '') + i
}


function now(){
    var now = new Date();
    var t = now.getFullYear() + '-' + 
    (now.getMonth() + 1) + '-' + 
    addZeroHead(now.getDate()) + ' ' + 
    addZeroHead(now.getHours()) + ':' +
    addZeroHead(now.getMinutes())
    return t;
}
var server = net.createServer(function(socket) {
    socket.end(now() + '\n');
})
server.listen(port);

//sample
/*
var net = require('net')
function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}
    
function now () {
    var d = new Date()
    return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}
    
var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})
server.listen(Number(process.argv[2]))
*/