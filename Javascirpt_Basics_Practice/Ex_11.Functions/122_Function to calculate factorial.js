let n = 5,
  factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}

console.log(factorial);

// using function

function fact(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
let f = fact(3);
console.log(f);

