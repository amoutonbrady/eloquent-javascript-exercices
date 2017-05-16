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

/* --- */

var list = arrayToList([10, 20, 30]);

function listToArray(list) {
	var isFinish = false;
	var obj = list;
	var arr = [];

	console.log(obj.rest.value);

	while (!isFinish) {
		arr.push(obj.value);

		if (obj.rest === null) isFinish = true;

		if (obj.rest !== null) obj = { value: obj.rest.value, rest: obj.rest.rest };
	}

	return arr;
}

console.log(listToArray(list));
