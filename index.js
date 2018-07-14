var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(5000, () => {
    console.log('Listening to port 5000');
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', socket => {
    console.log('Made socket connection');

    // Handle chat event
    socket.on('chat', data => {
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', data => {
        socket.broadcast.emit('typing', data);
    });
});