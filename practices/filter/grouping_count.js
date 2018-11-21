'use strict';

function getNoCount(collection, number) {
	let count = 0;
	for(let i=0; i<collection.length; i++) {
		if(number == collection[i])
			count++;
	}
	return count;
}

function grouping_count(collection) {

	let result = {};
	for(let i=0; i<collection.length; i++) {
		if(number == collection[i])
			result[key] = getNoCount(collection, key)
	}
	return result;
}

module.exports = grouping_count;
