var express = require('express');
var app = express();

//setting engine to view ejs
app.set('view engine', 'ejs');

//public folder to store assets
app.use(express.static(__dirname + '/public'))

//app routes
app.get('/', function(req,res) {
    res.render('pad')
})
// app.get('/:id', function(req,res) {
//     res.render('pad')
// })

// Normalize a port into a number, string, or false.
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  

//port listening in 3000
var port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

app.listen(3000);

module.exports = app;