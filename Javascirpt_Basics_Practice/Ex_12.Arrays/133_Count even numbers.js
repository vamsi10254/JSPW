// Count even no nos
let arr = [10, 15, 22, 6, 8, 13];
let count = 0;

for (let num of arr) {
    if (num % 2 === 0) {
        count++;
    }
}

console.log("Even numbers count:", count);
