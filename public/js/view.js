function View() {
	this.pages = [$("#intro"),$("#login"),$("#signup"),$("#profile"),$("#management")];
}

View.prototype = {
	
	constructor: View,
	
	show: function(_page) {
		for(var i in this.pages){
			if(_page == this.pages[i]){
				this.pages[i].toggle(true);
				this.current = _page;
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
	
	displayLeaves: function(leaves) {
		var html = '';
		
		var status = [ 'pending', 'approved', 'rejected' ];
		
		if(leaves===null)
			html = 'no leaves applied for.';
		for(var i in leaves){
			html += '<li class="'+status[leaves[i].status]+'" ><h4> from: '+ leaves[i].start.toDateString() + ' to: '+ leaves[i].end.toDateString() + ' status: ' + status[leaves[i].status] + ' ' +leaves[i].comment
			/*'<a href="#" class="btn btn-warning btn-xs" ><i class="fa fa-trash fa-fw"></i><span class="">withdraw</span> */' </a></h4>  </li>'
		}
		var div = $('.user_applications_display').html(html);//'<ul>'+html+'</ul>');
	},
	
	displayAdminLeaves: function(leaves) {
		var html = '', htmlP = '';
		
		var status = [ 'pending', 'approved', 'rejected' ];
		
		if(leaves===null)
			html = 'no one applied.';
		for(var i in leaves){
			if( leaves[i].status === 0 )
				htmlP += '<li class="'+status[leaves[i].status]+'"><h4> from: '+ leaves[i].start.toDateString() + ' to: '+ leaves[i].end.toDateString() + ' status: ' + status[leaves[i].status] +
				'<a href="#" onClick="app.setLeaveAdmin('+leaves[i].id+',2);" class="btn btn-warning btn-xs" ><i class="fa fa-thumbs-o-down fa-fw"></i><span class="">reject</span>' +
				'<a href="#" onClick="app.setLeaveAdmin('+leaves[i].id+',1);" class="btn btn-success btn-xs" ><i class="fa fa-thumbs-o-up fa-fw"></i><span class="">approve</span>  </a></h4>  </li>';
			else
				html += '<li class="'+status[leaves[i].status]+'"><h4> from: '+ leaves[i].start.toDateString() + ' to: '+ leaves[i].end.toDateString() + ' status: ' + status[leaves[i].status] +
			/*'<a href="#" class="btn btn-warning btn-xs" ><i class="fa fa-trash fa-fw"></i><span class="">withdraw</span> */' </a></h4>  </li>'
		}
		$('.admin_applications_display').html(html);//'<ul>'+html+'</ul>');
		$('.admin_pending_applications_display').html(htmlP);
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