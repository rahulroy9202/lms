
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


function create_user_cookie(_email, _password) {
    console.log("COOKIE  --CREATE ");
    $.cookie("u_email", _email, {expires: 200});
    $.cookie("u_password", _password, {expires: 200});
}

function read_user_cookie() {
    console.log("COOKIE  --READ ");
	if ((typeof $.cookie("u_email") != 'undefined') && (typeof $.cookie("u_password") != 'undefined')) {
        g_email = $.cookie("u_email");
        g_password = $.cookie("u_password");
        console.log("READ COOKIES complete - ",  g_email, g_password);
		return true;
    }
	return false;
}

function clear_user_cookie() {
    console.log("COOKIE  --CLEAR ");
    $.removeCookie("u_email");
    $.removeCookie("u_password");
    g_email = g_password = null;
}


var leave = new Array();

var start_date = new Date();
start_date.setDate(start_date.getDate()-5);


var max_date,min_date;
//var date_picker;

var lmsServer = initLmsServer(document.URL);


lmsServer.login({name:'new',password:'pwd'}, cb_login);

var hdays;
lmsServer.getHolidays(function(result){
	hdays = result;
	console.log(hdays);
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
			/*
			console.log(max_date);
			console.log(date);
			if(max_date && (date>max_date)){
				return [false, "", "exceeds"];
			}
			*/
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
					var nleave = new Leave(leave[0],leave[1])
					
					console.log(nleave.getDetails());

					display_leave_info(nleave.getDetails());
				}
			}
			
	}).on('clearDate', function(selected){

			console.log("DATE CLEARED",selected);
			if(selected.target.classList[2]==='from_dp'){
				$('.to_dp').data('datepicker').setEndDate('1/1/2016');
				$('.to_dp').data('datepicker').setStartDate('-4d');
				console.log(max_date);
			}
			else{
				$('.from_dp').data('datepicker').setEndDate('1/1/2016');
				$('.from_dp').data('datepicker').setStartDate('-4d');
			}
			
	});
}

init_dp('-4d','1/1/2016')

function display_leave_info(leave) {
	var html = 	'<ul><li> total length: '+ leave.length +'</li><li> week days: '+ leave.weekdays +'</li></ul>'
	var div = $('#new_leave_info').html(html);
}

//$('#datepicker').datepicker('getUTCDates', arg1, arg2);
