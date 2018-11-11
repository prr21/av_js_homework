(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.onload = function() {

	let Ajax = require('../parts/Ajax.js'),
		modal = require('../parts/modal.js'),
		calc = require('../parts/calc.js'),
		call = require('../parts/call.js'),
		options = require('../parts/options.js'),
		slider = require('../parts/slider.js'),
		tab = require('../parts/tab.js'),
		timer = require('../parts/timer.js');

	Ajax();
	modal();
	calc();
	call();
	options();
	slider();
	tab();
	timer();

};
},{"../parts/Ajax.js":2,"../parts/calc.js":3,"../parts/call.js":4,"../parts/modal.js":5,"../parts/options.js":6,"../parts/slider.js":7,"../parts/tab.js":8,"../parts/timer.js":9}],2:[function(require,module,exports){
function Ajax(){

	var	form = document.getElementsByClassName('main-form')[0],
		message = {
			loading: "loading",
			success: 'everything is fine',
			fail: 'something is wrong'
		},
		div = document.createElement('div');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		var xhr = new XMLHttpRequest();

		xhr.open('POST', 'server.php');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		let formData = new FormData(form);

		xhr.onreadystatechange = function() {
			if(xhr.readyState != 4){
				div.innerHTML = message.loading;
				form.appendChild(div);
			} else if(xhr.readyState === 4){
				if (xhr.status == 200 && xhr.status < 300){		
					div.innerHTML = message.success;
					form.appendChild(div);
				}
			} else form.appendChild(div.innerHTML = message.fail);
		}
		xhr.send(formData)
	});
}

module.exports = Ajax;
},{}],3:[function(require,module,exports){
function calc(){
	
	var peopleSum = document.getElementsByClassName('counter-block-input')[0],
	daySum = document.getElementsByClassName('counter-block-input')[1],
	total = document.getElementById('total'),
	peopleValue = 0,
	dayValue = 0;

	peopleSum.addEventListener('change', function() {
		peopleValue = +this.value;
		if(dayValue) caclPrice();
	});

	daySum.addEventListener('change', function() {
		dayValue = +this.value;
		if(peopleValue) caclPrice();
	});

	select.addEventListener('change', function() {
		caclPrice( this.options[this.selectedIndex].value )
	})

	function caclPrice(place = 1) {
		total.innerHTML = (dayValue + peopleValue) * 4000 * place;
	}
}

module.exports = calc;
},{}],4:[function(require,module,exports){
function call(){

	let age = document.getElementById('age');

	function showUser(surname, name) {
		alert("Пользователь " + surname + " " + name + ", его возраст " +
		this.value);
	};

	var petya = new MakeNewUser('petya', 'petrov', age);

	// showUser.call(petya, petya.surname,petya.name);

	function MakeNewUser(surname, name, value) {
	 	this.surname = surname;
	 	this.name = name;
	 	this.value = value.getAttribute('value');
	}
}

module.exports = call;

},{}],5:[function(require,module,exports){
function modal(){
	let descrBtn = document.querySelectorAll('.description-btn'),
	info = document.getElementsByClassName('info')[0],
	overlay = document.getElementsByClassName('overlay')[0],
	popupClose = document.getElementsByClassName('popup-close')[0];

	info.addEventListener('click', function(e) {
		var e = e.target;

		if (e.className == 'description-btn') {
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
			return false;
		};

		popupClose.onclick = function(){
			overlay.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});
}

module.exports = modal;
},{}],6:[function(require,module,exports){
function options(){
	
	class Options {

	constructor(height = 'auto', width = 'auto', bg = 'white', fontSize = 'inherit', textAlign = 'left'){
		this.height = height,
		this.width = width,
		this.bg = bg,
		this.fontSize = fontSize,
		this.textAlign = textAlign;
	};

	makeDiv(text,block){
		this.block = $(block) || document.body;
		this.div = document.createElement('div');

		this.block.appendChild(this.div);
		this.div.textContent = text;

		this.changeStyle();
	};

	changeStyle(){
		this.div.style.cssText = `height: ${this.height};
		width: ${this.width};
		background-color: ${this.bg};
		font-size: ${this.fontSize}; 	
		text-align: ${this.textAlign};`
	}
}

let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';

let prr = new Options('200px', '400px', '#e8e8e8', '26px', 'right');
// prr.makeDiv(text);
}

module.exports = options;
},{}],7:[function(require,module,exports){
function slider(){

	var prev = document.getElementsByClassName('prev')[0],
		next = document.getElementsByClassName('next')[0],
		dotsWrap = document.getElementsByClassName('slider-dots')[0],
		dots = document.getElementsByClassName('dot'),
		sliders = document.getElementsByClassName('slider-item'),
		curSlide = 0;

	prev.addEventListener('click', function() {
		slideOn(curSlide--)
	});

	next.addEventListener('click', function() {
		slideOn(curSlide++)
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length; i++) {

			if (event.target.classList.contains('dot') && event.target == dots[i]) {
				slideOn(curSlide =+ i);
				break
			}

		}
	});

	function slideOn() {

		for (let i = 0; i < sliders.length; i++) {
			dots[i].classList.remove('dot-active');
			sliders[i].classList.add('hide');
		}

		if (curSlide <= -1) {
			curSlide = sliders.length - 1;
		} else if (curSlide >= sliders.length) {
			curSlide = 0;
		}
		
		dots[curSlide].classList.add('dot-active');
		sliders[curSlide].classList.remove('hide');
	}
}

module.exports = slider;
},{}],8:[function(require,module,exports){
function tab(){

	var info_header = document.getElementsByClassName('info-header')[0],
	info_header_tab = document.getElementsByClassName('info-header-tab'),
	tab = document.getElementsByClassName('info-tabcontent');
	

	info_header.addEventListener('click', function(event) {
		var target = event.target;

		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				tab[i].classList.add('hide');
				
				if (target == info_header_tab[i]) {
					tab[i].classList.remove('hide');
				}
			}
		}
	});
}

module.exports = tab;
},{}],9:[function(require,module,exports){
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
},{}]},{},[1]);
