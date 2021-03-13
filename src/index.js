// Returns min in array
exports.min = function min (array) {

	
	if (array == undefined)
		return 0;
	if (array.length == 0)
		return 0;

	var min;

	min = array[0];

	for (var i = 1; i < array.length; ++i) {
		if (array[i] < min)
			min = array[i];
	}

	return min;
}

// Returns max in array

exports.max = function max (array) {

	if (array == undefined)
		return 0;
	if (array.length == 0)
		return 0;

	var max;

	max = array[0];

	for (var i = 1; i < array.length; ++i) {
		if (array[i] > max)
			max = array[i];
	}

	return max;
}

// Returns avarage in array
exports.avg = function avg (array) {

	if (array == undefined)
		return 0;
	if (array.length == 0)
		return 0;
	
	var sum = 0;

	for (var i = 0; i < array.length; ++i)
		sum += array[i];

	return sum / array.length;

}
