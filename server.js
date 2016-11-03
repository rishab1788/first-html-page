var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('bsdjcdjscjkds');
})

app.use(express.static(__dirname + '/public'));

app.listen(3000, function (arg) {
	console.log("server is started");
});