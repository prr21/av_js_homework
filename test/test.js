describe('Проверка на истинность', function() {	
	it('Функция sum возвращает тип данных true', function() {
		assert.equal(sum(2,2), true);
	});
});

describe('Проверка на истинность', function(){
	it('Проверка num == 5', function() {
		assert.equal(num, 5);
	});
});

describe('Функция each', function(){
	it('Возвращаемое значение соответствует типу данных array', function() {
		assert.typeOf(each(newArr, myFunc), 'array');
	});

	it('Проверка newArr.length == 5', function() {
		assert.lengthOf(each(newArr, myFunc), 5);
	});

	it('Проверка результат each(newArr, myFunc) == [97,40,13,12,-15]', function() {
		assert.equal(each(newArr, myFunc).join(',')  == [97,40,13,12,-15].join(','), true);
	});
});