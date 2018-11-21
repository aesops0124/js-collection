'use strict';

function isEven(number) {
	return (number % 2 === 0)
}
function choose_even(collection) {

	let result = [];
	for(let i=0; i<collection.length; i++) {
		if(isEven(collection[i]))
			result.push(collection[i]);
	}
	return result;
	//return collection.filter(number => isEven(number))

}

module.exports = choose_even;
