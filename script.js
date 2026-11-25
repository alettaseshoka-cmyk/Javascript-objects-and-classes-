// 1. Primitives vs Objects
let x = 10;
let y = x; // value is copied, not shared
x = 20;
console.log(y); // 10

let num = 42;
let objNum = Object(num);
console.log(typeof objNum); // "object"

// 2. Objects and Methods
const person = {
  name: "Alex",
  age: 22,
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};

console.log(person.greet());

// Function vs Method
function sayHello() {
  return "Hello!";
}

const obj = {
  sayHello() {
    return "Hi there!";
  }
};

console.log(sayHello()); // "Hello!"
console.log(obj.sayHello()); // "Hi there!"

// 3. Object() Constructor vs Literal
const empty1 = new Object();
const empty2 = {};
console.log(empty1); // {}
console.log(empty2); // {}

// 4. Classes
class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  introduce() {
    return `My name is ${this.name} and I study ${this.course}`;
  }
}

const student1 = new Student("Alex", "JavaScript");
console.log(student1.introduce());
console.log(student1);
