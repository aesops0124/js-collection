'use strict';

function isMultipleOfThree(number) {
	return (number % 3 === 0)
}

function choose_multiples_of_three(collection) {

	return collection.filter(number => isMultipleOfThree(number))
  //implement here
}

module.exports = choose_multiples_of_three;
