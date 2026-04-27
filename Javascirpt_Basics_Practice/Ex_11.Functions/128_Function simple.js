
// test Using loop

function hi(n) {
  for (i = 1; i <= n; i++) console.log("Hi Sachin , How are you");
}
hi(2);

// Using recursion

function hi(n) {
  if (n === 0) return; // stop condition
  console.log("Hi Sachin, How are you da");
  hi(n - 1); // reduce and call again
}