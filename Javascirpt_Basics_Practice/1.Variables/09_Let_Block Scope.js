if (true) {
    let x = 10;
}
console.log(x); // error - Reason: let works only inside block { }

// Correct approach

if (true) {
    let x = 10;
    console.log(x); 
}
