var express = require('express'),
    //_ = require('lodash'),
	bodyParser = require('body-parser'),
    app = express(),
    Waterline = require('waterline');



// Instantiate a new instance of the ORM
var orm = new Waterline();


//////////////////////////////////////////////////////////////////
// WATERLINE CONFIG
//////////////////////////////////////////////////////////////////

// Require any waterline compatible adapters here
//var diskAdapter = require('sails-disk'),
var mysqlAdapter = require('sails-mysql');


// Build A Config Object
var config = {

	// Setup Adapters
	// Creates named adapters that have have been required
	adapters: {
		'default': mysqlAdapter,
		mysql: mysqlAdapter
	},

	// Build Connections Config
	// Setup connections using the named adapter configs
	connections: {
		
		mysqlos: {
			adapter	  : 'mysql',
			module    : 'sails-mysql',
			host      : process.env.OPENSHIFT_MYSQL_DB_HOST || 'localhost',
			port      : process.env.OPENSHIFT_MYSQL_DB_PORT || 3306,
			user      : process.env.OPENSHIFT_MYSQL_DB_USERNAME || 'admin',
			password  : process.env.OPENSHIFT_MYSQL_DB_PASSWORD ||'admin',
			database  : 'lms'
		}
		
	},

	defaults: {
		migrate: 'alter'
	}

};


//////////////////////////////////////////////////////////////////
// WATERLINE MODELS
//////////////////////////////////////////////////////////////////

var User = Waterline.Collection.extend({

  identity: 'user',
  connection: 'mysqlos',

  attributes: {
    name: 'string',
    password: 'string',
	role: 'integer',
	manager_id: 'integer'
  }
});

var Holidays = Waterline.Collection.extend({

  identity: 'holiday',
  connection: 'mysqlos',

  attributes: {
	date: 'date',
	occasion: 'string'
  }
});

var Pet = Waterline.Collection.extend({

	identity: 'pet',
	connection: 'mysqlos',

	attributes: {
		name: 'string',
		breed: 'string'
	}
});


// Load the Models into the ORM
orm.loadCollection(User);
orm.loadCollection(Pet);
orm.loadCollection(Holidays);


//////////////////////////////////////////////////////////////////
// EXPRESS SETUP
//////////////////////////////////////////////////////////////////


// Setup Express Application
app.use(express.static(__dirname + '/public'));
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


//app.use(express.methodOverride());




// Build Express Routes (CRUD routes for /users)

app.get('/users', function(req, res) {
  app.models.user.find().exec(function(err, models) {
    if(err) return res.json({ err: err }, 500);
    res.json(models);
  });
});

app.post('/users', function(req, res) {
  app.models.user.create(req.body, function(err, model) {
    if(err) return res.json({ err: err }, 500);
    res.json(model);
  });
});



app.post('/setholidays/', function(req, res) {
	
	var h = req.body.h;
	console.log(Array.isArray(h));
	
	for(var i in h) {
		
		var x = { name: i };
		console.log(x);
		/*
		app.models.holiday.create(i, function(err, model) {
			if(err) return res.json({ err: err }, 500);
			res.json(model);
		});*/
	}
});




app.get('/users/:id', function(req, res) {
  app.models.user.findOne({ id: req.params.id }, function(err, model) {
    if(err) return res.json({ err: err }, 500);
    res.json(model);
  });
});

app.put('/users/:id', function(req, res) {
  // Don't pass ID to update
  delete req.body.id;

  app.models.user.update({ id: req.params.id }, req.body, function(err, model) {
    if(err) return res.json({ err: err }, 500);
    res.json(model);
  });
});



//////////////////////////////////////////////////////////////////
// START WATERLINE
//////////////////////////////////////////////////////////////////

// Start Waterline passing adapters in
orm.initialize(config, function(err, models) {
	if(err) throw err;

	app.models = models.collections;
	app.connections = models.connections;

	// Start Server

	//set up application enviornment
	var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
	var ipaddress = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1';
	app.listen(port, ipaddress);
  
	//app.listen(3000);
});
