/**
 * Convert an array to a list
 * @param {Array[*]} arr : array that you want to convert
 */
function arrayToList(arr) {
	var i = 0, obj = {}, rest = null, len = arr.length - 1;

	for (i = len; i >= 0; i -= 1) {
		obj.value = arr[i];
		obj.rest = rest;

		rest = { value: obj.value, rest: obj.rest };
	}

	return obj;
}

console.log("01 - Array to List:", arrayToList([10, 20]));

/* --- */

var list = arrayToList([10, 20, 30]);

/**
 * Convert a list to an array
 * @param {Object} list - List
 */
function listToArray(list) {
	var isFinish = false;
	var obj = list;
	var arr = [];

	while (!isFinish) {
		arr.push(obj.value);

		if (obj.rest === null) isFinish = true;

		if (obj.rest !== null) obj = { value: obj.rest.value, rest: obj.rest.rest };
	}

	return arr;
}

console.log("02 - List to Array:", listToArray(list));

/* --- */

/**
 * Prepend the value to the list
 * @param {Number} value - number to prepend
 * @param {Object} list - list to which the function prepend the value
 */
function prepend(value, list) {
  return { value: value, rest: list };
}

console.log("03 - Prepend a value to a list:", prepend(10, prepend(20, null)));

/* --- */

/**
 * Return the value of the index on the list
 * @param {Object} list - The list on which we want the value
 * @param {Number} index - The desired index
 */
function nth(list, index) {
  return index > 0 ? nth(list.rest, index - 1) : list.value;
}

console.log("04 - Nth:", nth(arrayToList([10, 20, 30]), 1));
