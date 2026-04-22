let num = 45890;
let count = 0;

while (num > 0) {
   num = Math.floor(num / 10); // remove last digit
  count++;
}

console.log(count);