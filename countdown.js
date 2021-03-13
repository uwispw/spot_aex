var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = '<span class="days"><span class="number">' + days + '</span><span class="unit">Days</span></span><span class="hours"><span class="number">' + hours + '</span><span class="unit">Hrs</span></span><span class="minutes"><span class="number">' + minutes + '</span><span class="unit">Mins</span></span><span class="secs"><span class="number">' + seconds + '</span><span class="unit">Secs</span></span>'; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}