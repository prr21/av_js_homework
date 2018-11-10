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