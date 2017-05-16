/**
 * Returns an array of every number between a & b
 * @param {Number} a
 * @param {Number} b
 * @param {Number} step
 * @return {Array[Number]} arr
 */
function range(a, b) {
  var arr = [],
      i = 0,
      step = 1;

  step = !arguments[2] ? 1 : arguments[2];

  console.log(step);

  for (i = a; i <= b; i += step)
    arr.push(i);

  return arr;
}

/**
 * Returns the sum of every number in the given array
 * @param {Array[Number]} arr
 * @return {Number} total
 */
function sum(arr) {
  var total = 0,
      i = 0,
      length = arr.length;

  for (i = 0; i < length; i += 1) {
    total += arr[i];
  }

  return total;
}

console.log(range(5, 2, -1));
// -> 55