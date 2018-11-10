(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
	let Ajax = requier('../parts/Ajax.js'),
		calc = requier('../parts/calc.js'),
		call = requier('../parts/call.js'),
		modal = requier('../parts/modal.js'),
		options = requier('../parts/options.js'),
		slider = requier('../parts/slider.js'),
		tab = requier('../parts/tab.js');

		Ajax()
		calc()
		call()
		modal()
		modal()
		options()
		slider()
		tab()
})
},{}]},{},[1]);
