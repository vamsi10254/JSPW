// Largest number in array
let arr = [10, 5, 8];
for (let i = 0; i < arr.length; i++) {
    if (arr [i] >= arr [j] && arr [k] >= arr[i] ) 
  console.log(arr[i], " is largest");
}

// Correct Approach
let arr = [10, 55, 88];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);