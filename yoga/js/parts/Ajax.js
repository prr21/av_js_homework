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