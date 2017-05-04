/**
 * Count the number of uppercase B in the given string
 * @param {String} word
 * @return {Number} countBs
 */
function countBs(word) {
  var counter = 0,
      target = 'B';
      length = word.length,
      i = 0;

  for (i = 0; i < length; i += 1) {
    if (word.charAt(i) === target)
      counter += 1;
  }

  return counter;
}

/**
 * Count the number of letter given in the string given
 * @param {String} word
 * @param {Char} letter
 * @return {Number} countChar
 */
function countChar(word, letter) {
  var counter = 0,
      target = letter;
      length = word.length,
      i = 0;

  for (i = 0; i < length; i += 1) {
    if (word.charAt(i) === target)
      counter += 1;
  }

  return counter;
}

console.log(countBs("BBC"));
// -> 2

console.log(countChar("kakkerlak", "k"));
// -> 4