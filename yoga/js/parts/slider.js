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