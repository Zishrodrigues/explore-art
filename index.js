var express = require('express');
var app = express();

app.use(express.static('build'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function (req, res) {
    res.render('pages/index');
});

var server = app.listen(process.env.PORT || 5000, function () {
  console.log('server running on port 5000');
});

