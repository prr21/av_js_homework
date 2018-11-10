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