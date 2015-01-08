
/**
 * Module dependencies.
 */

var express = require('express');
var quote = require('./routes/quote');

var app = express();
app.use('/public', express.static('public'));
app.get('/quote/:code', quote.getLatestQuoteByCode);
app.get('/', function(req, res) {
    res.sendfile('public/index.html');    
});

var port = process.env.port || 8888;
app.listen(port, function() {
    console.log('server created');
    
});