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