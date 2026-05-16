// Object literal with key-value pairs
let student = {
  1: "Ashik",
  age: 22,
  course: "Computer Science",
  subjects: ["Networks", "Operating Systems", "Databases"],
  isGraduated: true,
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

let arr=Object.keys(student);
console.log(typeof arr)
for(let i in arr){
    
    console.log(student[i]);

}