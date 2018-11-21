'use strict';

function isMultipleOfThree(number) {
	return (number % 3 === 0)
}

function choose_multiples_of_three(collection) {

	let result = [];
	for(let i=0; i<collection.length; i++) {
		if(isMultipleOfThree(collection[i]))
			result.push(collection[i]);
	}
	return result;
	
	//return collection.filter(number => isMultipleOfThree(number))

}

module.exports = choose_multiples_of_three;
