// What is Reverse Array?

// Reversing an array means changing the order of elements from last to first.
// Method 1 – Using loop (most common in interviews)
let arr = [1, 2, 3, 4, 5];

let reversed = [];

for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
}

console.log(reversed);


// Method 2 – Using reverse() built-in method (short)
let arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr);

// Method 3 – Reverse without extra array (two pointer method)
let arr = [1, 2, 3, 4, 5];

for(let i = 0, j = arr.length - 1; i < j; i++, j--){
    
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}

console.log(arr);