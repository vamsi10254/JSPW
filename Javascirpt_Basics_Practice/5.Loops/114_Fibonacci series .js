// The Fibonacci series is a sequence of numbers where each number is the
// sum of the two previous numbers.
// Sequence example
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
/*   
Scenario to understand

Imagine:

First number = 0
Second number = 1
Next number = 0 + 1 = 1
Next number = 1 + 1 = 2
Next number = 1 + 2 = 3
Next number = 2 + 3 = 5
continues...

*/
// Print first 10 Fibonacci numbers
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 1; i <= 8; i++) {
  let c = a + b;
  console.log(c);

  a = b;
  b = c;
}

// Fibonacci using function

function fib(n) {
  let a = 0;
  let b = 1;

  console.log(a);
  console.log(b);
  for (let i = 1; i <= n - 2; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
fib(10);
