let n = 5;

for (let i = 1; i <= 10; i++) {
  let result = n * i;
  console.log(n + " x " + i + " = " + result);
}

// Cleaner modern syntax
let n = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}
