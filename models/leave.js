var Waterline = require('waterline');

var Leave = Waterline.Collection.extend({

	identity: 'leave',
	connection: 'mysqlos',

	attributes: {
		start: {
			type: 'datetime',
			required: true,
		},
		end: {
			type: 'datetime',
			required: true,
		},
		user_id: 'integer',
		manager_id: 'integer',
		status: 'integer',
		comment: 'string'
	},
	
	getLength: function( _holidays_array ) {
		
		var _leave_length = ((this.end - this.start)/(24*60*60*1000)) + 1;
		var _weekdays = 0;		
		var _tmp = new Date(this.start);
		
		for(var i =0; i < _leave_length; i++) {
			_tmp.setDate(tmp.getDate()+1);
			if(_tmp.getDay()>0 && _tmp.getDay()<6) {
				_weekdays++;
			}
		}
		
		var _effective_days = _weekdays;
		if(holidays_array) {
			//holiday array comes with no sat and sun holydays. i removed them when adding.
			for(var i in _holidays_array) {
				if( holidays_array[i] > this.start && _holidays_array[i] < this.end ) {
					_effective_days--;
				}
			}
		}
		else
			effective_days = -1;
		
		return {length: _leave_length, weekdays: _weekdays, effective: _effective_days };
	},
	
	getActualLength: function() {
		// Do something here
	}
});

module.exports = Leave;