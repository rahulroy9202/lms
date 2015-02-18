function User(name, pwd) {
	
	if(name && pwd){
		this.name = name;
		this.password = pwd;
	}	
	this.role = -1;
	this.id = -1;
}

User.prototype = {
	
	constructor: User,
	
	createCookie : function() {
		$.cookie("u_name", this.name, {expires: 2000});
		$.cookie("u_password", this.password, {expires: 2000});
	},
	
	readCookie : function() {
		if ((typeof $.cookie("u_name") != 'undefined') && (typeof $.cookie("u_password") != 'undefined')) {
			this.name = $.cookie("u_name");
			this.password = $.cookie("u_password");
			console.log("READ COOKIES complete - ",this);
			return true;
		}
		return false;
	},
	
	clearCookie : function() {
		$.removeCookie("u_name");
		$.removeCookie("u_password");
	},
	
	logout : function(_forget) {
		console.log('x');
		if(_forget)
			this.clearCookie();
		this.name = this.password = null;
	},
	
	signin : function(_lmsServer, _remember, _cb) {
		if(_lmsServer){
			_lmsServer.login(this.toJSON(), function(data) {
				if(data.role) {
					this.role = data.role;
					this.id = data.id;
					
					if(_remember)
						this.createCookie();
					
					_cb(this);
				}
				else
					_cb(false);
				
			});
		}
	},
	
	toJSON : function() {
		return {name: this.name, password: this.password};
	}
	
}
