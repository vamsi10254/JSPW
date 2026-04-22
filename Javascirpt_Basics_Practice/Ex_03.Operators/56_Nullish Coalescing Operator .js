// Nullish Coalescing Operator = Returns right value only if left is null or undefined.
let name = null;

console.log(name ?? "Guest");

// Difference:
// || → checks false values (0,"",false,null,undefined)
// ?? → checks only null,undefined

console.log(0 || 10);  // 10
console.log(0 ?? 10);  // 0 

