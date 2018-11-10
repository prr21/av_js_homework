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
