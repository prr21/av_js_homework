'use strict'

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


/*	let ul = document.getElementsByTagName('ul')[0];

	ul.addEventListener('click', function(event){
		var target = event.target;
		if (target.tagName == 'A') {
			
		}
	})*/

let age = document.getElementById('age');

function showUser(surname, name) {console.log(this)
	alert("Пользователь " + surname + " " + name + ", его возраст " +
	this.value);
};

var petya = new MakeNewUser('petya', 'petrov');

// showUser.call(petya, petya.surname,petya.name);

function MakeNewUser(surname, name) {
 	this.surname = surname;
 	this.name = name;
 	this.value = age.getAttribute('value');
}


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

class Options {

	constructor(height = 'auto', width = 'auto', bg = 'white', fontSize = 'inherit', textAlign = 'left'){
		this.height = height,
		this.width = width,
		this.bg = bg,
		this.fontSize = fontSize,
		this.textAlign = textAlign;
	};

	makeDiv(text,block){
		this.block = document.getElementById(block) || document.body;
		this.div = document.createElement('div');

		this.block.appendChild(this.div);
		console.log(this.div);

		this.div.textContent = text;
		console.log(text);

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

document.write(`asdasdasd ${text[0]} + "Prrr" 'text'`)
