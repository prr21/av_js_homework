"use strict"

let timer,
	money,
	name,
	price;
time = new Date();
time = time.getHours();

	let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		shopItems: [],
		open: false,
		discount: false,
		shooseGoods: function shooseGoods() {
			for (let i = 0; i < 5; i++) {
			    let a = prompt('Какой тип товара будем продовать?', [i]);

		    	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
		    		console.log('Всё верно');
		    		mainList.shopGoods[i] = a;
		    	} else i -= 1;
			}
		},
		workTime: function workTime(time) {
			if (time < 0) {
				console.log('Такого быть не может!');
			} else if (time > 8 && time < 20) {
				console.log('Время работать');
				mainList.open = true;
			} else if (time < 24) {
				console.log('Уже слишком поздно!');
			} else console.log('В сутках только 24 часа!');
		},
		takeBudget: function takeBudget() {
			alert('Ежедневный бюджет: ' + mainList.budget / 30);
		},
		makeDiscount: function makeDiscount() {
			if (discount == 1) {
				price = (price / 100) * 80;
			}
		},
		hireEmployers: function makeEmployers() {
			for (let i = 1; i <= 4; i++) {
				mainList.employers[i] = prompt('Введите имя сотрудника', 'Сотрудник № ' + [i]);
			}
		},
		chooseShopItems: function chooseShopItems() {
			let items;
			while (items == '' || items == null || !isNaN(+items) || items == undefined) {
				items = prompt('Введите через запятую товару', '');
			}
				mainList.shopItems = items.split(',');
				mainList.shopItems.sort();

				mainList.shopItems.forEach(function (item, i, arr) {
					i += 1;
					alert('У нас вы можете купить: ' + i + ') ' + item);
				});
		},
		showWhatIn: function showWhatIn() {
			for (let key in mainList) {
				alert("Наш магазин включает в себя: " + key);
			}			
		}

	}

	/*while (isNaN(mainList.budget) || mainList.budget == '' || mainList.budget == null) {
		mainList.budget = prompt('Ваш бюджет?', '30000');
	}

	mainList.shopName = prompt('Название вашего магазина?', 'verblyadi');*/

console.log(mainList);