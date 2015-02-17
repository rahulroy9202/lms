module.exports = {

    'db_url' : 'mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/'

};


$('.has-events.G')

$.each( [ '.has-events.G' ], function( index, value ) {
  console.log("d")
  $( value ).attr('class');
});


var holidays = new Array();
$('.has-events.G').each(function( index ) {
  var tmp = $( this ).attr('class').toString().split(' ').pop().split('-');
  tmp.shift();
  holidays.push(new Date(tmp.shift(),tmp.shift()-1,tmp.shift()));
});
console.log(holidays);

var res = new Array();

for(var i =0; i<holidays.length;i++){
	
	
	
	if(holidays[i].getDay()>0 && holidays[i].getDay()<6){
		res.push(holidays[i])
	}
	else{
		console.log(holidays[i],holidays[i].getDay());
	}
}



function test_api() {

    $.ajax({
        url: 'https://lms-rahulroy9202.rhcloud.com/holidays/',
        data: {
			h: res
        },
        type: "POST",
        dataType: "json",
        success: function(json) {
            console.log("RESULTS- \n", json);
			result = json;
        },
        error: function(xhr, status, errorThrown) {
            console.log("Status: " + status);
        },
    });
}





//holidays.pop();
var start = holidays.shift();
var end = holidays.shift();


var elapsed = end.getTime() - start.getTime();

var elapsedDays = end.getDate() - start.getDate();

