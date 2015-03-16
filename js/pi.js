console.log('hello world');
var r=4;
var circleArea=0;
$(document).ready(function() {
	for (var i = 0;i<r+1; i++) {
		for(var count=0;count<=r;count++){
			if(Math.pow(i,2)+Math.pow(count,2)<=Math.pow(r,2))
				circleArea++;
		}
	}
	var pi=circleArea/Math.pow(r,2);
	$('#answer').text(pi);
});
