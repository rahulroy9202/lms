var express = require('express'),
    //_ = require('lodash'),
	bodyParser = require('body-parser'),
    app = express(),
	moment = require('moment'),
    Waterline = require('waterline');

// Instantiate a new instance of the ORM
var orm = new Waterline();

// Build A Config Object
var config = require('./config/config');

//Load Models
var User = require('./models/user'),
	Holiday = require('./models/holiday'),
	Leave = require('./models/leave');

// Load the Models into the ORM
orm.loadCollection(User);
orm.loadCollection(Leave);
orm.loadCollection(Holiday);

// Setup Express Application
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());								// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({	extended: true }));		// to support URL-encoded bodies
app.use(function(req, res, next) {
    
	if (req.url.toString() !== "/status/") {
        console.log(req.url);							// just for debugging
        console.log(req.body);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Setup Express Paths

app.get('/timetest/', function(req, res) {
	var x = new Date();
	res.json(x);
});


app.post('/holidays/', function(req, res) {
	
	var h = req.body.h;
	console.log(Array.isArray(h));
	
	var result = new Array();
	for(var i in h) {
		
		h[i] = new Date(h[i]);
		app.models.holiday.create({ date: h[i] },function(err, model) {
		if(err) return console.log(err);
			console.log(model);
		});
		
	}
	res.json(result);
});


app.get('/api/holidays/', function(req, res) {
	app.models.holiday.find().exec(function(err, models) {
		if(err) return res.json({ err: err }, 500);
		console.log(models);
		
		var results = new Array();
		for(var i in models ){
			console.log(new Date(models[i].date).getDay());
			results.push(new Date(models[i].date));
		}
		
		res.json(results);
	});
});


app.post('/api/signin/', function(req, res) {
	app.models.user.findOne({ name: req.body.user.name, password: req.body.user.password })
	.exec(function(err, model) {
		if(err) return res.json({ status: false, err: err }, 500);
		res.json(model.toJSON());
	});
});


app.post('/api/leave/new/', function(req, res) {
	app.models.user.findOne({ name: req.body.user.name, password: req.body.user.password })
	.exec(function(err, model) {
		if(err) return res.json({ err: err }, 500);
		
		req.body.leave.user_id = model.id;
		req.body.leave.manager_id = model.manager_id;
		
		app.models.leave.create(req.body.leave,function(err, model) {
			if(err) return res.json({ err: err }, 500);
			res.json(model);
		});
	});
});


app.post('/api/leave/get/', function(req, res) {
	app.models.user.findOne({ name: req.body.user.name, password: req.body.user.password })
	.exec(function(err, model) {
		if(err) return res.json({ err: err }, 500);
		
		app.models.leave.find({ user_id: model.id },function(err, model) {
			if(err) return res.json({ err: err }, 500);
			res.json(model);
		});
	});
});


app.post('/api/admin/leave/get/', function(req, res) {
	app.models.user.findOne({ name: req.body.user.name, password: req.body.user.password })
	.exec(function(err, model) {
		if(err || model.role > 1) return res.json({ err: err }, 500);
		
		app.models.leave.find({ manager_id: model.id },function(err, model) {
			if(err) return res.json({ err: err }, 500);
			res.json(model);
		});
	});
});


app.post('/api/admin/leave/set/', function(req, res) {
	app.models.user.findOne({ name: req.body.user.name, password: req.body.user.password })
	.exec(function(err, model) {
		if(err || model.role > 1) return res.json({ err: err }, 500);
		
		app.models.leave.findOne({ id: req.body.leave.id, manager_id: model.id },function(err, model) {
			if(err) return res.json({ err: err }, 500);
			res.json(model);
		});
	});
});





//////////////////////////////////////////////////////////////////
// START WATERLINE
//////////////////////////////////////////////////////////////////

// Start Waterline passing adapters in
orm.initialize(config, function(err, models) {
	if(err) console.log(err);

	app.models = models.collections;
	app.connections = models.connections;
	
	//set up application enviornment
	var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
	var ipaddress = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1';
	
	// Start Server
	app.listen(port, ipaddress);
});
