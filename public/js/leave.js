function Leave(start, end) {
	this.start = start;
	this.end = end;
	this.status = 0;
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
	
	var effective_days = _weekdays;
	
	if(holidays_array) {
		//holiday array comes with no sat and sun holydays. i removed them when adding.
		for(var i in holidays_array) {	
			if( holidays_array[i] > this.start && holidays_array[i] < this.end ) {
				effective_days--;
			}
		}
	}
	else
		effective_days = -1;
	
	return {length: leave_length, weekdays: _weekdays, effective: effective_days };
}

