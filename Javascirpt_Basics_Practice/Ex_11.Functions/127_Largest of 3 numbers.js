function check(n) {
  if (n > 0) {
    return "Positive";
  } else if (n < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
let result = check(-9); 
console.log(result);