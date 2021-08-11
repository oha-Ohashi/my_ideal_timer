//var millis = 100*57 +100*60*59;
var millis = 0;
var rap_millis = 0;
var counting_up = true;
var millisTimer;

setInterval(function(){
	if(millis < 0){
		alert("Time's Up!");
		countStop();
		millis = 0;
	}else{
		if(counting_up){
			$("#maindisplay").text(format_millis(millis-rap_millis));
			$("#subdisplay").text(format_millis(millis));
		}else{
			$("#maindisplay").text(format_millis(millis));
			$("#subdisplay").text(' ');
		}
	}
}, 10);

function countUp(){
	counting_up = true;
	clearInterval(millisTimer);
	millisTimer = setInterval(function(){
		millis++;
	}, 10);
}
function countDown(){
	counting_up = false;
	clearInterval(millisTimer);
	millisTimer = setInterval(function(){
		millis--;
	}, 10);
}
function countStop(){
	clearInterval(millisTimer);
}
function countRap(){
	rap_millis = millis;
}


function format_millis(m){
	var milli = zero_pad(2, m % 100);
	var sec = zero_pad(2, Math.floor(m/100)%60);
	var min = zero_pad(2, Math.floor(m/100/60)%60); 
	var hour = zero_pad(2, Math.floor(m/100/60/60)%24); 
	if(m < 100*60)//1分未満
		return min + ':' + sec + '.' + milli;
	else if(m < 100*60*60)//1時間未満
		return min + ':' + sec ;
	else
		return hour + ':' +min + ':' + sec;
}
function zero_pad(n, num){
	res = '';
	for(var i=0; i < n; i++){
		res += '0'
	}
	res = ( res + num ).slice( -n );
	return res;
}

$(".mainbtns:eq(0)").click(function(){
	countUp();
});
$(".mainbtns:eq(1)").click(function(){
	countDown();
});
$(".mainbtns:eq(2)").click(function(){
	countStop();
});
$(".mainbtns:eq(3)").click(function(){
	countRap();
});