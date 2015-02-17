
var views = {
	
	intro: $("#intro"),
	login: $("#login"),
	signup: $("#signup"),
	profile: $("#profile"),
	management: $("#management"),
	
	show: function(view){
		
	}
}

views.intro.toggle();
views.login.toggle();
views.signup.toggle();
views.profile.toggle();
views.management.toggle();


var leave = new Array();

var start_date = new Date();
start_date.setDate(start_date.getDate()-5);


var max_date,min_date;
//var date_picker;

var url = window.location.origin; //location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '');
var lmsServer = initLmsServer(url);


var user = new User('new','pwd');
var user2 = new User('new2','pwd2');


lmsServer.login(user, cb_login);

var hdays;

lmsServer.getHolidays(function(result){
	hdays = result;
	console.log(hdays);
	init_dp('-4d','31/12/2015');
});


function cb_login(data) {
	console.log(data);
	
	if(data.role==2){
		views.management.toggle(true);
	}
	else
		views.profile.toggle(true);
}

function init_dp(start,end) {

	console.log(arguments);
	
	$('#datepicker').datepicker({
		format: "dd/mm/yyyy",
		startDate: start,
		endDate: end,
		clearBtn: true,
		autoclose: true,
		daysOfWeekDisabled: "0,6",
		beforeShowDay: function(date) {
			
			for(var i in hdays){
				if (date.getMonth() == hdays[i].getMonth()  && date.getDate() == hdays[i].getDate()){
					console.log(date,hdays[i]);
					return {
						enabled: false,
						tooltip: 'hurray: holiday',
						classes: 'hdays'
					};
				}
			}
        }
		
	}).on('changeDate', function(selected){

			console.log("DATE CHANGED",selected);
			if(selected.date){
				if(selected.target.classList[2]==='from_dp'){
					leave[0] = new Date(selected.date.valueOf());				
					var range = new Date(leave[0]);
					
					$('.to_dp').data('datepicker').setStartDate(new Date(range.valueOf()));
					range.setDate(range.getDate()+14);
					
					$('.to_dp').data('datepicker').setEndDate(new Date(range.valueOf()));
					console.log(max_date);
				}
				else{
					leave[1] = new Date(selected.date.valueOf());
					var range = new Date(leave[1]);
					
					$('.from_dp').data('datepicker').setEndDate(new Date(range.valueOf()));
					range.setDate(range.getDate()-14);
					console.log(range);
					$('.from_dp').data('datepicker').setStartDate(new Date(range.valueOf()));
					console.log(max_date);
				}
				if(leave.length===2){
					 nleave = new Leave(leave[0],leave[1])
					
					console.log(nleave.getDetails(hdays));

					display_leave_info(nleave.getDetails(hdays));
				}
			}
			
	}).on('clearDate', function(selected){

			console.log("DATE CLEARED",selected);
			if(selected.target.classList[2]==='from_dp'){
				$('.to_dp').data('datepicker').setEndDate('31/12/2015');
				$('.to_dp').data('datepicker').setStartDate('-4d');
				console.log(max_date);
			}
			else{
				$('.from_dp').data('datepicker').setEndDate('31/12/2015');
				$('.from_dp').data('datepicker').setStartDate('-4d');
			}
			
	});
}

init_dp('-4d','31/12/2015');

function display_leave_info(leave) {
	var html = 	'<ul><li> total length: '+ leave.length +'</li><li> week days: '+ leave.weekdays +'</li><li> company days: '+ ( (leave.effective != -1)? leave.effective :'unknown') +'</li></ul>'
	var div = $('#new_leave_info').html(html);
}

//$('#datepicker').datepicker('getUTCDates', arg1, arg2);
