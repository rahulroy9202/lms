function View() {
	this.pages = [$("#intro"),$("#login"),$("#signup"),$("#profile"),$("#management")];
}

View.prototype = {
	
	constructor: View,
	
	show: function(_page) {
		for(var i in this.pages){
			if(_page == this.pages[i]){
				this.pages[i].toggle(true);
				
				if(i===3){
					
				}
				
				
				continue;
			}
			this.pages[i].toggle(false);	
		}
	},
	
	initProfilePage: function() {
		console.log("this shouldn't execute");
	},
	
	initDatePicker: function( _start, _end, _holidays, _cb){
		
		var leave = new Array();
		var _view = this;
		
		$('#datepicker').datepicker({
		format: "dd/mm/yyyy",
		startDate: _start,
		endDate: _end,
		clearBtn: true,
		autoclose: true,
		daysOfWeekDisabled: "0,6",
		beforeShowDay: function(date) {
			
			for(var i in _holidays){
				if (date.getMonth() == _holidays[i].getMonth()  && date.getDate() == _holidays[i].getDate()){
					console.log( date, _holidays[i] );
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
					}
					else{
						
						leave[1] = new Date(selected.date.valueOf());
						var range = new Date(leave[1]);
						$('.from_dp').data('datepicker').setEndDate(new Date(range.valueOf()));
						range.setDate(range.getDate()-14);
						$('.from_dp').data('datepicker').setStartDate(new Date(range.valueOf()));
					}
					if(leave.length===2){
						if(_cb)
							return _cb(leave.shift(),leave.shift());
						
						nleave = new Leave(leave[0],leave[1])
						console.log(nleave.getDetails(_holidays));
						console.log(this);
						_view.displayNewLeave(nleave.getDetails(_holidays));
					}
				}
				
		}).on('clearDate', function(selected){

				console.log("DATE CLEARED",selected);
				if(selected.target.classList[2]==='from_dp'){
					$('.to_dp').data('datepicker').setEndDate(_end);
					$('.to_dp').data('datepicker').setStartDate(_start);
					console.log(max_date);
				}
				else{
					$('.from_dp').data('datepicker').setEndDate(_end);
					$('.from_dp').data('datepicker').setStartDate(_start);
				}
				
		});
	
	},
	
	displayNewLeave: function(leave) {
		var html = 	'<ul><li> total length: '+ leave.length +'</li><li> week days: '+ leave.weekdays +'</li><li> company days: '+ ( (leave.effective != -1)? leave.effective :'unknown') +'</li></ul>'
		var div = $('#new_leave_info').html(html);
	},
	
	displayLoginError: function() {
		/*var html = 	'<ul><li> total length: '+ leave.length +'</li><li> week days: '+ leave.weekdays +'</li><li> company days: '+ ( (leave.effective != -1)? leave.effective :'unknown') +'</li></ul>'
		var div = $('#new_leave_info').html(html);*/
	}

}








/*
function View() {
	
	this.intro = $("#intro"),
	this.login = $("#login"),
	this.signup = $("#signup"),
	this.profile = $("#profile"),
	this.management = $("#management"),
	
	this.show = function(view){
		
	}
}
*/


/*
views.intro.toggle();
views.login.toggle();
views.signup.toggle();
views.profile.toggle();
views.management.toggle();
*/