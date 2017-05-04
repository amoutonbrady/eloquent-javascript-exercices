function generateChessBoard(size) {
  // Initialize all the data required
  var i = 0, // Row loop
      j = 0, // Column loop
      row = '', // Will contains the entire string of '#', ' ' & '\n'
      currRow = 0, // Indicate the current row
      currColumn = 0; // Indicate the current column

  // Loop for as many row as the size
  for (i = 0; i < size; i += 1) {
    // Get the current row (i) and add 1 to start from 1 instead of 0
    currRow = i + 1;

    // Loop for as many column as the size
    for (j = 0; j < size; j += 1) {
      // Get the current column (j) and add 1 to start from 1 instead of 0
      currColumn = j + 1;

      // If the row is not odd we start the row with a space ' '
      if (currRow % 2 === 0) {
        // If the column is not odd we add a space
        if (currColumn % 2 === 0) row += ' ';
        // Otherwise we add a '#'
        else row += '#';
      // Otherwise we start with a hash
      } else {
        // If the column is not odd we add a '#'
        if (currColumn % 2 === 0) row += '#';
        // Otherwise a space
        else row += ' ';
      }
    }

    // At the end of each row we add a new line
    row += '\n';
  }

  // We return the final string
  return row;
}

// Call the function that returns the string
console.log(generateChessBoard(8));