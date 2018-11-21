'use strict';

function isEven(number) {
	return (number % 2 === 0)
}
function choose_even(collection) {

	return collection.filter(number => isEven(number))

}

module.exports = choose_even;
