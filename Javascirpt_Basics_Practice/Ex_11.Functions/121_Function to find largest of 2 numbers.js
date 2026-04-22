// Using conditions
let a = 24,
  b = 20;
if (a > b) {
  console.log("a is largest");
} else if (a === b) {
  console.log("both are equal");
} else console.log("b is largest");

// Using Functions
function largeNo(a, b) {
  if (a > b) {
    return a;
  } else if (a === b) return "equal";
  else return b;
}
let result = largeNo(31, 310);
console.log(result);

// Compare
if (result === 310) {
  console.log("Correct largest value");
}

// Reuse
let value = result * 2;
console.log(value);

