var mysqlAdapter = require('sails-mysql');

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

module.exports = config;