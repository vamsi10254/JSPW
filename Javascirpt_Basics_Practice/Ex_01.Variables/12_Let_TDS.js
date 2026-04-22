// TDZ (Temporal Dead Zone)

console.log(a);

let a = 5;

// o/p - ReferenceError
// Reason: Variable exists but cannot access before initialization.

/*
What is TDZ?
Temporal Dead Zone (TDZ) is the time between entering a scope and declaring a variable with let or const, where the variable exists but cannot be accessed.
If you try to use the variable during this period → ReferenceError occurs.


*/