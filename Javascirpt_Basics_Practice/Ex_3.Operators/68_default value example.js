function greet(name){
 console.log(name ?? "Guest");
}

greet();

// This example explains the Nullish Coalescing Operator (??) in JavaScript.
// If value is null or undefined, it uses defaultValue
// value ?? defaultValue 