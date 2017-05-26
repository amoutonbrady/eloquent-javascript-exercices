/**
 * Returns true if the two parameters are equal
 * @param {*} a 
 * @param {*} b 
 */

function deepEqual(a, b) {
  // Variable to return
  var isEqual = false;

  // If it's not object then we do a simple comparison
  if (typeof a !== 'object' && typeof b !== 'object') {
    isEqual = a === b;
  }

  // If the type of a is different from b, then they are not the same
  else if (typeof a !== typeof b) {
    isEqual = false;
  }

  // If the type is object then we do a deep comparison
  else {

    // If there are not the same number of keys, then they are not the same
    if (Object.keys(a).length !== Object.keys(b).length) {
      isEqual = false;
    }

    // If there are the same number of keys, then we compare each value
    else {

      // For each key we compare the value of a[key] with b[key]
      for (prop in a) {
        isEqual = deepEqual(a[prop], b[prop]);

        // If the result of this is false, then they are not the same
        if (!isEqual)
          break;
      }

    }
  }

  return isEqual;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true