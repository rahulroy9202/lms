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
  holidays.push(new Date(tmp.shift(),tmp.shift(),tmp.shift()));
});
console.log(holidays);

//holidays.pop();
var start = holidays.shift();
var end = holidays.shift();


var elapsed = end.getTime() - start.getTime();

var elapsedDays = end.getDate() - start.getDate();

