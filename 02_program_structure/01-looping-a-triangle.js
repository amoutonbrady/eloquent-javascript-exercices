// Initialize all the datas
var i = 0,
    hashs = '',
    length = 7;

// Loop 7 times
for (i = 0; i < length; i += 1) {

  // For each loop we add as much hashs as the number of for 
  // (+1 because we start from 0)
  while (hashs.length < i + 1) {
    hashs += '#';
  }

  // We display the hash row
  console.log(hashs);
}