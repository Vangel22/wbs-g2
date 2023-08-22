// named functions

function nameFun() {
  console.log("i am named function");
}

// anonymous functions

const multiply = function (x, y) {
  return x * y;
};

const multiplyArrow = (x, y) => {
  return x * y;
};

// arrow functions - shorter function

const divide = (x, y) => x / y;
// function divideNamed(x, y) {
//   return x / y;
// }

// divide(1,1); // povik

// const divideme = divide; // referenca
// divideme(2,2);

// call
// reference

// IIFE - immediately invoked function expression
(function () {
  console.log("i am IIFE");
})();

(() => {
  console.log("i am IIFE with arrow");
})();

function test() {
  console.log("i am test function");
}

// Constructor Functions - used to create objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("Alice", 20);

// Methods - functions inside objects

const calculator = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator.add(2, 2));
console.log(calculator["add"](3, 3));

// Callback Functions
setTimeout(function () {
  console.log("Callback executed!");
}, 5000);
