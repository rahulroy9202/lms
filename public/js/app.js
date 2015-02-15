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

var dp = $('#datepicker').datepicker({
    format: "dd/mm/yyyy",
    
	//startDate: "1/1/2015",
    startDate: new Date(),
    
	endDate: "31/12/2015",
	clearBtn: true,
	autoclose: true,
	daysOfWeekDisabled: "0,6",
	
	beforeShowDay: function (date){
      if (date.getMonth() == (new Date()).getMonth())
        switch (date.getDate()){
          case 4:
            return {
				enabled: false,
				tooltip: 'Example tooltip',
				classes: ''
            };
          case 8:
            return false;
          case 12:
            return "green";
        }
    }
});


//$('.datepicker').datepicker('getUTCDates', arg1, arg2);
