// implicit conversion

console.log("5" + 2);

let a = "10";
let b = 5;
console.log(a + b);

let a = "10";
let b = 5;
console.log("10" + 5); // Only + will work as concatenation other works well

console.log("10" - 2);
console.log("10" * 2);
console.log("10" / 2);
// Reason: - * / work only with numbers

// explicit conversion
// string to number

let num = Number("10");
console.log(num);
console.log(typeof num);

// number to string
let str = String(10);
console.log(str);
console.log(typeof str);

// Why explicit conversion is needed?
let a = "10";
let b = 5;
console.log(a + b);

// Because "10" is string → concatenation happens.
// Correct way:
let a = "10";
let b = 5;
let result = Number(a) + b;
console.log(result);

// 

console.log(Number("100"));     // 100
console.log(Number("10.5"));    // 10.5
console.log(String(50));        // "50"
console.log((60).toString());   // "60"