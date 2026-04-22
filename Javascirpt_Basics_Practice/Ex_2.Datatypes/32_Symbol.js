let s1 = Symbol("test");
let s2 = Symbol("test");

console.log(s1 === s2); // false

// ------------
let user = {
  name: "Vamsi"
};

let id = Symbol("id");

user[id] = 123;

console.log(user);