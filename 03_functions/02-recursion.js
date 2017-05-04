/**
 * Finds out if a number is even
 * @param {Number} num
 * @return {Boolean} isEven
 */
function isEven(num) {

  /**
   * Recursive function that calls itself until the current number
   * is 0 (true) or 1 (false).
   * If the current number is negative, the function will add 2
   * every time until it reach 0 or 1.
   * If the current number is positive, the function will substract 2
   * every time until it reach 0 or 1.
   * @param {Number} currNum
   * @return {Boolean} find
   */
  function find(currNum) {
    if (currNum === 1)
      return false;
    else if (currNum === 0)
      return true;
    else if (currNum > 1)
      return find(currNum - 2);
    else
      return find(currNum + 2);
  }

  return find(num);
}

console.log(isEven(-1));
// -> false