// Count digits in a number

let num = 1253;
let count = 0;

while (num > 0) {
    num = Math.floor(num / 10); // remove last digit
    count++;
}

console.log("Total digits count:", count); 
