// Function: Reverse a number
function reverseNumber(num) {
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10; // get last digit
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10); // remove last digit
  }
  return reverse;
}

let result = reverseNumber(1266);
console.log(result);



