// Print key and value together

let student = {
   id: 101,
   name: "Sam",
   marks: 90
};

for(let key in student){
   console.log(key + " : " + student[key]);
}