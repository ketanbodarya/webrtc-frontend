var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require("path");
const cors = require("cors");
var os = require('os');
const port = process.env.PORT || 8001;

app.use(cors());

io.on('connection', function (socket) {
    console.log("user connected");

    socket.on('message', function (message) {
        console.log("Got message from a user:", message);
    });

    socket.send("Hello from server");
});

app.use(express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

server.listen(port, function () {
    console.log("server is listning on port: " + port);
});