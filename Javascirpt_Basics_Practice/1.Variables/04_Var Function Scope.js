function test() {
    var a = 10;
   }
console.log(a); // error Reason: var works only inside function.

/* Option 1 – Log the value
function test() {
    var a = 10;
    console.log(a);
}
test();

Option 2 – Return the value
function test() {
    var a = 10;
    return a;
}

console.log(test()); */