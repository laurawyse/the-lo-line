var http = require('http'),
    express = require('express');

var handlebars = require('express-handlebars').create();
var routes = require('./routes');

var app = express();

app.set('port', process.env.PORT || 2997);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});