const myName = "Semos";
const check = true;
const PI = 3.14;

const niza = [1, 2, 3, 4]; //5, 6
niza.push(5);
niza.push(6);
niza.pop();
niza.splice(1, 2);
// od kade pocnuva - prv argument
// kolku da se dvizi napred - vtor argument

const person = {
  name: "John",
  age: 30,
  info: function () {
    // nemozeme da koristime arrow funkcija ako sakame da gi pristapime name i age
    return `Your name is: ${this.name}, you are ${this.age} old.`;
  },
};

// console.log(person.info());

// const students = ["Eric", "John", "Jessy"];

// find
const resFind = students.find((student) => student === "Eric");
console.log(resFind);

// map
const resMap = students.map((student) => {
  if (student === "Eric") {
    student = "Eric Doe";
  }
  return student;
});

console.log(resMap);

// ['E','r','i','c'] -> char array

// filter

const resFilter = students.filter((student) => student.charAt(0) !== "E");
console.log(resFilter);

const students = [
  {
    ime: "John",
    fakultet: "FINKI",
    prosek: 7.6,
    grad: "Skopje",
  },
  {
    ime: "Jane",
    fakultet: "American College",
    prosek: 8.5,
    grad: "Bitola",
  },
  {
    ime: "Joey",
    fakultet: "Goce Delcev",
    prosek: 9.2,
    grad: "Stip",
  },
  {
    ime: "Rick",
    fakultet: "FINKI",
    prosek: 9.6,
    grad: "Skopje",
  },
  {
    ime: "Oliver",
    fakultet: "Europen University",
    prosek: 8.2,
    grad: "Skopje",
  },
  {
    ime: "Tom",
    fakultet: "FINKI",
    prosek: 6.6,
    grad: "Skopje",
  },
];

// Task 1: Find all students from Skopje, print names
// Task 2: Get all students ascending by prosek
// Task 3: Find best student from FINKI
// Task 4: Find best student from Skopje
