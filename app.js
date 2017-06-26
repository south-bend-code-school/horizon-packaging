var express = require('express');
var path = require('path');
var app = express();

//Routes
// route to make index.html display at port3000
app.use(express.static(path.join(__dirname, '/build/views')));

// sets paths for static files (css, js, img)
app.use('/stylesheets', express.static(__dirname + '/build/stylesheets'));
app.use('/js', express.static(__dirname + '/build/js'));
app.use('/img', express.static(__dirname + '/build/img'));

// set routes for other pages in application
// example
// app.use('/team', express.static(__dirname + '/build/views/about.html'));

// set port
app.set('port', 3000);

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Listening on port ' + port);
});
