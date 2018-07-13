var express = require('express');

// App setup
var app = express();
var server = app.listen(5000, () => {
    console.log('Listening to port 5000');
});

// Static files
app.use(express.static('public'));