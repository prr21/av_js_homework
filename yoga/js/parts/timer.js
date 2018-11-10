function timer(){
	var deadline = '8-09-2018';			

	function getTime(endtime) {				
		let t = Date.parse(endtime) - Date.parse(new Date),
			hours = Math.floor(t/60/60/1000),
			minutes = Math.floor(t/60/1000 % 60),
			seconds = Math.floor(t/1000 % 60);

			if (t <= 0) {
				hours = '00';
				minutes = '00';
				seconds = '00';
			}

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	}

	function setTimer(id,endtime) {

		let	timer = document.getElementById(id),			
			hours = timer.querySelector('.hours'),	
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateTime, 1000);

		function updateTime() {
			let t = getTime(endtime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
		updateTime();
	}

	setTimer('timer', deadline);
}

module.exports = timer;