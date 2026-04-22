// Function to check even or odd
// First way

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(6)); // true

// 2 Way

function evnOdd(n) {
  if (n % 2 === 0) {
    return "the no is even";
  } else return " the no is odd";
}
let result = evnOdd(7);
console.log(result);

// Cleaner version
function evnOdd(n) {
  return n % 2 === 0 ? "even" : "odd";
}
let result = evnOdd(12);
console.log(result);

// QA-style usage
// if (result === "odd") {
//   console.log("Test Passed");
// }