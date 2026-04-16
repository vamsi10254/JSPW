// Reverse number
let n = 123;
let reverse = 0;

while (n > 0) {
    let digit = n % 10;        // get last digit
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);  // remove last digit
}

console.log(reverse);
