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