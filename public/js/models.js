function User(name, pwd) {
	this.name = name;
	this.password = pwd;
	this.role = -1;
}


function Leave(start, end) {
	this.start = start;
	this.end = end;
}

Leave.prototype.getDetails = function(holidays_array) {
	
	console.log(this);
	var leave_length = ((this.end - this.start)/(24*60*60*1000)) + 1;
	console.log("total length- ",leave_length);
	
	var _weekdays = 0;
	
	var tmp = new Date(this.start);
	
	for(var i =0; i<leave_length; i++){
		tmp.setDate(tmp.getDate()+1);
		if(tmp.getDay()>0 && tmp.getDay()<6){
			_weekdays++;
		}
	}
	
	if(holidays_array){
		//holiday array comes with no sat and sun holydays. i removed them when adding.
		var effective_days = _weekdays;
		
		for(var i in holidays_array) {	
			if( holidays_array[i] > this.start && holidays_array[i] < this.end ) {
				effective_days--;
			}
		}
	}
	
	return {length: leave_length, weekdays: _weekdays, effective: effective_days || 'unknown' };
}

