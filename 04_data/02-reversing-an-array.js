/**
 * Function that takes an array and returns a new array
 * equal to the reversed array
 * @param {Array[*]} arr
 * @return {Array[*]} newArr
 */
function reverseArray(arr) {
  var i = 0,
      newArr = [],
      length = arr.length - 1;

  for (i = length; i >= 0; i -= 1)
    newArr.push(arr[i]);

  return newArr;
}

/**
 * Reverse the array given and returns it
 * @param {Array[*]} arr
 * @return {Array[*]} arr
 */
function reverseArrayInPlace(arr) {
  var i = 0,
      length = arr.length - 1,
      temp = '',
      count = length;

  for (i = 0; i <= Math.floor(length / 2); i += 1) {
    temp = arr[i];
    arr[i] = arr[count];
    arr[count] = temp;
    count -= 1;
  }

  return arr;
}

console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue)