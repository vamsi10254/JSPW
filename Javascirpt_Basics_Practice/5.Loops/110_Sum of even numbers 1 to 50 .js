//3. Sum of even numbers 1 to 50
let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}
console.log("the Sum of EVEN nos from 1 to 50 is", sum); 
