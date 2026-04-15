// for...in with Object (Most common use)
// 1.Returns property names

let person = {
  name: "John",
  age: 25,
};

for (let value in person) {
  console.log(value);
}

// 2.Returns index positions (0,1,2...)
let numbers = [10, 20, 30];
for (let i in numbers) {
  console.log(i);
}

// 3.want values:
let arr = [10, 20, 30];
for (let i in arr) {
  console.log(arr[i]);
}


