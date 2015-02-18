var Waterline = require('waterline');

var User = Waterline.Collection.extend({

	identity: 'user',
	connection: 'mysqlos',

	attributes: {
		name: {
			type: 'string',
			unique: true
		},
		password: 'string',
		role: 'integer',		// 2 for manager, 1 for user
		manager_id: 'integer'	// manager responsible for user. model.id of manager user.
	},
	
	toJSON: function() {
		var obj = this.toObject();
		delete obj.password;
		return obj;
	}
  
});

module.exports = User;