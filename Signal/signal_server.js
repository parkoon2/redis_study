
const http = require('http');

const signalServer = http.createServer();
const io = require('socket.io').listen
var app = require('http').createServer(handler);
//var fs = require('fs');
var io = require('socket.io').listen(app);
var redis = require('socket.io-redis');

const redisConfig = require('./redis_conf.js');
 
 
if (process.argv.length < 3){
    console.log('ex) node app <port>');
    process.exit(1);
}
app.listen(process.argv[2]);
console.log(process.argv[2] +' Server Started!! ')
 
// function handler(req, res) {
//     fs.readFile(__dirname + '/index.html',
//         function (err, data) {
//             if (err) {
//                 res.writeHead(500);
//                 return res.end('Error loading index.html');
//             }
//             res.writeHead(200);
//             data = data.toString('utf-8').replace('<%=host%>', req.headers.host);
//             res.end(data);
//         });
// }

io.adapter(redis(redisConfig));
 
io.sockets.on('connection', function (socket) {
    socket.on('message', function(data){


        socket.broadcast.to('dfsdfsdfsd').emit('message', data);
    });
});