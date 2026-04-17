// Method 1
let num = 4;
num > 0;
console.log(num > 0 , "Positive number");
console.log(num < 0 , "Negative number");
console.log(num === 0 , "Zero nuumber");

// Method 2 - 
let num = 0;

let result = num > 0 ? "Positive"  : num < 0 ? "Negative" : "Zero";
console.log(result);