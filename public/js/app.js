var app;

$(document).ready(function() {
	//initApp();
	app = new App();
	
	app.lmsServer.getHolidays(function(result){
		app.hdays = result;
		console.log(app.hdays);
		app.view.initDatePicker('-4d','31/12/2015', app.hdays, app.createLeave);
	});

	
}); 


function App() {
	
	this.lmsServer = new initLmsServer(window.location.origin);
	this.view = new View();
	this.view.show(this.view.pages[0]);
	/*
	this.lmsServer.getHolidays(function(result){
		this.holidays = result;
		console.log(holidays);
		this.view.initDatePicker('-4d','31/12/2015', holidays, this.createLeave);
	});
	*/
	
	this.user = new User();
	
	if(this.user.readCookie()){
		this.lmsServer.login(this.user, this.cb_login);
	}
}



/*
var lmsServer = new initLmsServer(window.location.origin),
	view = new View();

view.show(view.pages[0]);
*/

//var user = 
//
//var user = new User('new','pwd');
//var user2 = new User('new2','pwd2');


//lmsServer.login(user, cb_login);
/*
var hdays;

*/

App.prototype = {
	
	constructor: App,	

	login: function() {
		app.user = new User($('#login-username').val(),$('#login-password').val());
		app.lmsServer.login(app.user, app.cb_login);
	},
	
	cb_login: function (data) {
		console.log(data);
		console.log(this);
		
		app.user.id = data.id;
		
		switch(data.role){
			case 1: app.view.show(app.view.pages[3]);
				break;
			case 2: app.view.show(app.view.pages[4]);
				break;
			default: app.view.displayLoginError();
				break;
		}
		
		
	},
	
	createLeave: function(start,end){
		console.log(arguments);
		nleave = new Leave(start,end);
		console.log(nleave.getDetails(app.hdays));
		console.log(this);
		app.view.displayNewLeave(nleave.getDetails(app.hdays));
		
		app.nLeave = nleave;
	},
	
	cb_newLeave: function(data) {
		console.log("NEW LEAVE- ",data);
		if(data.status === 0 && data.user_id === app.user.id)
			app.nleave = null;
		
	},
	
	confirmLeave: function(){
		if(app.nLeave.getDetails(app.hdays).length < 16){
			app.lmsServer.newLeave(app.user, app.nLeave, app.cb_newLeave);
		}
	}


}