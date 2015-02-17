var lmsServer = initLmsServer(window.location.origin);
var view = new View();





var leave = new Array();

var start_date = new Date();
start_date.setDate(start_date.getDate()-5);


var max_date,min_date;
//var date_picker;




var user = new User('new','pwd');
var user2 = new User('new2','pwd2');


lmsServer.login(user, cb_login);

var hdays;

lmsServer.getHolidays(function(result){
	hdays = result;
	console.log(hdays);
	view.initDatePicker('-4d','31/12/2015');
});


function cb_login(data) {
	console.log(data);
	
	if(data.role==2){
		view.management.toggle(true);
	}
	//else
		//view.profile.toggle(true);
}


function display_leave_info(leave) {
	var html = 	'<ul><li> total length: '+ leave.length +'</li><li> week days: '+ leave.weekdays +'</li><li> company days: '+ ( (leave.effective != -1)? leave.effective :'unknown') +'</li></ul>'
	var div = $('#new_leave_info').html(html);
}


