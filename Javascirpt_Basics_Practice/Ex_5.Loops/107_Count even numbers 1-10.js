// Count even numbers 1-10
let count = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("even no is ",i);
    count++;
  }
}
console.log("total numbers count:", count);
