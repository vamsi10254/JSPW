console.log(a); // undefined

var a = 5;

/* 

What is Hoisting?

Hoisting means JavaScript moves variable declarations to the top of their scope before execution.
But behavior differs for var, let, and const.

*/

console.log(a);  // undefined

var a = 10;
console.log(a);  // 10

