'use strict';

function isMultipleOfThree(number) {
	return (number % 3 === 0)
}

function choose_multiples_of_three(collection) {

	return collection.filter(number => isMultipleOfThree(number))

}

module.exports = choose_multiples_of_three;
