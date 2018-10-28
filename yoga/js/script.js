'use strict'

// Переключение табов
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


// Обратный отсчет
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

// Незаконченный скрипт с плавным скроллом
/*	let ul = document.getElementsByTagName('ul')[0];

	ul.addEventListener('click', function(event){
		var target = event.target;
		if (target.tagName == 'A') {
			
		}
	})*/



// Использовние конструктора и медота call
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



// Всплытие и закрытие модальных окон
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


// Сделать div с заданными параметрами при помощи class и конструктора
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


// Ajax запрос
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