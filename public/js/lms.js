function initLmsServer(_url){
	
	var lmsserver = new Object();
	
	lmsserver.login = function( _user, _cb ) {
		
		$.ajax({
				url: _url + '/api/signin/',
				data: {
					user: _user
				},
				type: "POST",
				dataType: "json",
				success: function(json) {
					//console.log("signin result- \n", json);
					if(typeof(_cb)==='function'){
						_cb(json);
					}
				},
				error: function(xhr, status, errorThrown) {
					console.log("Status: " + status);
				},
			});
	}
	
	lmsserver.getLeaves = function( _user, _cb ) {
		
		$.ajax({
				url: _url + '/api/leave/get/',
				data: {
					user: _user
				},
				type: "POST",
				dataType: "json",
				success: function(json) {
					console.log("get leaves result- \n", json);
					
					for(var i in json){
						json[i].start = new Date(json[i].start);
						json[i].end = new Date(json[i].end);
					}
					
					if(typeof(_cb)==='function'){
						_cb(json);
					}
				},
				error: function(xhr, status, errorThrown) {
					console.log("Status: " + status);
				},
			});
	}
	
	
	lmsserver.getLeavesAdmin = function( _user, _cb ) {
		
		$.ajax({
				url: _url + '/api/admin/leave/get/',
				data: {
					user: _user
				},
				type: "POST",
				dataType: "json",
				success: function(json) {
					console.log("admin get leaves result- \n", json);
					
					for(var i in json){
						json[i].start = new Date(json[i].start);
						json[i].end = new Date(json[i].end);
					}
					
					if(typeof(_cb)==='function'){
						_cb(json);
					}
				},
				error: function(xhr, status, errorThrown) {
					console.log("Status: " + status);
				},
			});
	}
	
	lmsserver.setLeaveAdmin = function( _user, _leave, _cb ) {
		
		$.ajax({
				url: _url + '/api/admin/leave/get/',
				data: {
					user: _user,
					leave: _leave
				},
				type: "POST",
				dataType: "json",
				success: function(json) {
					console.log("admin set leaves result- \n", json);
					if(typeof(_cb)==='function'){
						_cb(json);
					}
				},
				error: function(xhr, status, errorThrown) {
					console.log("Status: " + status);
				},
			});
	}
	
	
	lmsserver.newLeave = function( _user, _leave, _cb ) {
		
		$.ajax({
				url: _url + '/api/leave/new/',
				data: {
					user: _user,
					leave: _leave
				},
				type: "POST",
				dataType: "json",
				success: function(json) {
					console.log("new leave result- \n", json);
					if(typeof(_cb)==='function'){
						_cb(json);
					}
				},
				error: function(xhr, status, errorThrown) {
					console.log("Status: " + status);
				},
			});
	}
	
	lmsserver.getHolidays = function( _cb ) {
		
		$.ajax({
				url: _url + '/api/holidays/',
				type: "GET",
				dataType: "json",
				success: function(json) {
					console.log("getHolidaysInfo result- \n", json);
					
					var res = new Array();
					for(var i in json){
						res.push(new Date(json[i]));
					}
					
					if(typeof(_cb)==='function'){
						_cb(res);
					}
				},
				error: function(xhr, status, errorThrown) {
					console.log("Status: " + status);
				},
			});
	}

	return lmsserver;
}