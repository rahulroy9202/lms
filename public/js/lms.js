function initLmsServer(_url){
	
	var lmsserver = new Object();
	
	lmsserver.login = function( _user, _cb ) {
		
		$.ajax({
				url: _url + 'api/signin/',
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
				url: _url + 'api/leave/get/',
				data: {
					user: _user
				},
				type: "POST",
				dataType: "json",
				success: function(json) {
					console.log("get leaves result- \n", json);
					if(typeof(_cb)==='function'){
						_cb(json);
					}
				},
				error: function(xhr, status, errorThrown) {
					console.log("Status: " + status);
				},
			});
	}
	
	lmsserver.newLeaves = function( _user, _leave, _cb ) {
		
		$.ajax({
				url: _url + 'api/leave/new/',
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
	
	

	return lmsserver;
}