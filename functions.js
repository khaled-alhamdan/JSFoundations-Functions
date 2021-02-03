const greetings = "Hello";

function greet(name) {
  console.log(`${greetings} ${name}`);
  return name;
}

greet("Khaled");

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function isOdd(n) {
  if (n % 2 === 1) {
    // If there is a remainder then its odd
    return true;
  } else {
    // If there is no remainder left then its even
    return false;
  }
}

console.log(isOdd(17));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  if (n % 2 === 1) {
    return Math.floor(n / 2);
  } else {
    return n / 2;
  }
}

console.log(oddsSmallerThan(10));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function squareOrDouble(n) {
  if (n % 2 === 1) {
    return Math.pow(n, 2);
    // or
    // console.log(n * n);
  } else {
    return n * 2;
  }
}

console.log(squareOrDouble(8));

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
