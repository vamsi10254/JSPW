// Optional Chaining Operator (?.)
// Prevents error if property not present.
let user = {
 name: "john"
};

console.log(user.address?.city);
console.log(user.name);

// Optional chaining: "If the value exists, then access next property, otherwise return undefined"
