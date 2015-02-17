function View() {
	this.pages = [$("#intro"),$("#login"),$("#signup"),$("#profile"),$("#management")];
}

View.prototype = {
	
	constructor: View,
	
	show: function(_page){
		for(var i in this.pages){
			if(_page == this.pages[i]){
				this.pages[i].toggle(true);
				if(i===3){
				
				}
				
				
				continue;
			}
			this.pages[i].toggle(false);	
		}
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