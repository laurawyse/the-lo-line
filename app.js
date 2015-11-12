var http = require('http'),
    express = require('express');

var handlebars = require('express-handlebars').create();

var app = express();

app.set('port', process.env.PORT || 3001);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index', { title: 'The Lo Line' });
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});