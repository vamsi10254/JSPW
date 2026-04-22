// 3.	Factorial
// n! = n × (n-1) × (n-2) × ... × 1

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(4));
console.log(factorial(6));

// ------------------------------------------------------
// Factorial direct
let n = 6;
let result = 1;

for (let i = 1; i <= n; i++) {
  result = result * i;
}

console.log(result); // 120
