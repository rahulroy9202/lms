api_server_url = document.domain;


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
//views.profile.toggle();
//views.management.toggle();

/*
function View(){
}
Person.prototype.name = “Nicholas”;
Person.prototype.sayName = function(){
alert(this.name);
};
*/

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
			/*
			startDate = new Date(selected.date.valueOf());
			startDate.setDate(startDate.getDate(new Date(selected.date.valueOf())));
			$('.datepicker').datepicker('setStartDate', startDate);
			return;*/
			console.log("DATE CHANGED",selected);
			
			if(selected.target.classList[2]==='from_dp'){
				leave[0] = new Date(selected.date.valueOf());
				
				//min_date = $('.input-daterange').data('datepicker')('setEndDate', max_date);
				
				$('.input-daterange').datepicker('setEndDate', max_date);
				max_date = new Date(leave[0]);
				max_date.setDate(max_date.getDate()+15);
				
				//$('#datepicker').data('datepicker').setEndDate(max_date);
				console.log(max_date);
				//$('.datepicker').datepicker('setEndDate', max_date);
				//init_dp(leave[0],max_date);
			}
			else
				leave[1] = new Date(selected.date.valueOf());
			//console.log(leave);
			
			if(leave.length===2){
				var leave_length = ((leave[1] - leave[0])/(24*60*60*1000));
				console.log(++leave_length);
				
				var company_leave = 0;
				var tmp = new Date(leave[0]);
				for(var i =0; i<leave_length;i++){
					tmp.setDate(tmp.getDate()+1);
					if(tmp.getDay()>0 && tmp.getDay()<6){
						company_leave++;
					}
				}
				display_leave_info({ length: leave_length, actual_length: company_leave });
			}
	});
}

init_dp(new Date(),'1/1/2016')

function display_leave_info(leave) {
	var html = 	'<ul><li> total length: '+ leave.length +'</li><li> week days: '+leave.actual_length+'</li></ul>'
	var div = $('#new_leave_info').html(html);
}

//$('#datepicker').datepicker('getUTCDates', arg1, arg2);
