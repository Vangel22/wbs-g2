// Global scope
// Object.__proto__

// Local scope - function

function greet() {
  let test = "i am test";
}

console.log("test", test);

// Block scope {}
if (true) {
  //block
}

for (let i = 0; i < 10; i++) {
  //block
}

switch (
  "test"
  //block
) {
}
