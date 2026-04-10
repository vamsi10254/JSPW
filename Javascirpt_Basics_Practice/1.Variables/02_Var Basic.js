// Phase 1 :- Memory Creation ---
var a = test;
var b = test1;

// Phase 2 :- Code Execution ---
console.log(a);
var a = "vamsi";
console.log(a);


var a;          // declaration moved to top
console.log(a); // undefined
a = 10;         // initialization stays here
// console.log(a); 
console.log(a); 