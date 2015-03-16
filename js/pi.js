console.log('hello world');

var calcPi = function(r) {
	var circleArea=0;
	for (var i = 0;i<r+1; i++) {
		for(var count=0;count<=r;count++){
			if(Math.pow(i,2)+Math.pow(count,2)<=Math.pow(r,2))
				circleArea++;
		}
	}
	circleArea=circleArea*4;
	var pi=circleArea/Math.pow(r,2);
	$('#answer').text(pi);
	console.log(circleArea);
}

$(document).ready(function() {
	$( "form" ).submit(function( event ) {
		event.preventDefault();

		var r = $('#radius').val();
		calcPi(r);
	});

});
