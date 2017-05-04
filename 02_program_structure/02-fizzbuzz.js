// Initialize all the datas
var i = 0,
    limit = 100,
    currNum = 0;

// Loop between 1 & 100 (technically 0 & 99)
for (i = 0; i < limit; i += 1) {
  // Add 1 to i to make the loop between 1 & 100
  currNum = i + 1;

  // If the current number is divisible by 3 & 5 : "FizzBuzz"
  // Else if it's only divisible by 3 : "Fizz"
  // Else if it's only divisible by 5 : "Buzz"
  // Else we just print the current number
  if (currNum % 3 === 0 && currNum % 5 === 0) {
    console.log('FizzBuzz');
  } else if (currNum % 3 === 0) {
    console.log('Fizz');
  } else if (currNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(currNum);
  }
}