// Make connection
var socket = io.connect('http://localhost:5000');

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    });
    message.innerHTML = '';
});

// Listening to typing event
message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
});

// Listen for chat event on client
socket.on('chat', data => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' +
        data.message + '</p>';
    feedback.innerHTML = '';
});

// Listen for typing event on client
socket.on('typing', data => {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message ... </em></p>';
});