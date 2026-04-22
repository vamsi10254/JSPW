let ar = [345, 4, 6, 54, 400 ,-600];

let largest = ar[0];

for (let num of ar) {
  if (num > largest) {
    largest = num;
  }
}
console.log("The largest in array is", largest);


// 
let arr = [3, 7, 2, 9, 5];

let largest = arr[0];   // assume first element is largest

for(let i = 1; i < arr.length; i++){
    
    if(arr[i] > largest){
        largest = arr[i];
    }

}

console.log("Largest number is:", largest);