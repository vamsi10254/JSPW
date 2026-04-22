// 3.	Factorial
// n! = n × (n-1) × (n-2) × ... × 1

let n = 5,
  factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}

console.log(factorial);
