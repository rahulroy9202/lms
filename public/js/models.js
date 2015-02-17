function User(name, pwd) {
	this.name = name;
	this.password = pwd;
	this.role = -1;
}

User.prototype.createCookie = function() {
    $.cookie("u_name", this.name, {expires: 200});
    $.cookie("u_password", this.password, {expires: 200});
}

User.prototype.readCookie = function() {
	
	if ((typeof $.cookie("u_name") != 'undefined') && (typeof $.cookie("u_password") != 'undefined')) {
        this.name = $.cookie("u_name");
        this.password = $.cookie("u_password");
        console.log("READ COOKIES complete - ",this);
		return true;
    }
	return false;
}

User.prototype.clearCookie = function() {
    $.removeCookie("u_name");
    $.removeCookie("u_password");
}

User.prototype.logout = function() {
    this.clearCookie();
	this.name = this.password = null;
}

User.prototype.signin = function(_lmsServer, _remeber, _cb) {

	_lmsServer.login(this, function(data) {
		if((data.role) {
			this.role = data.role;
			this.id = data.id;
			
			if(_remeber)
				this.createCookie();
			
			_cb(this);
		}
		else
			_cb(false);
		
	});
}



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

