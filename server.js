var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');


//set up application enviornment
var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1';

//set up middleware
app.use(express.static(__dirname + '/public'));			// serve app front end
app.use(bodyParser.json());								// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({	extended: true }));		// to support URL-encoded bodies

app.use(function(req, res, next) {
    if (req.url.toString() !== "/status/") {
        console.log(req.url);
        console.log(req.body);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, ipaddress);

app.get('/status/', function(req, res) {
    res.send('everything ok');
});
