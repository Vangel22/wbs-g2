const fs = require("fs");

// GET, POST, PUT, PATCH, DELETE

// read file
const readData = (source) => {
  return new Promise((success, fail) => {
    fs.readFile(`${source}.json`, "utf-8", (err, data) => {
      if (err) return fail(err);
      const out = JSON.parse(data);
      return success(out);
    });
  });
};
// write file
const writeData = (data, destination) => {
  return new Promise((success, fail) => {
    const out = JSON.stringify(data);
    fs.writeFile(`${destination}.json`, out, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

// Create

const addPerson = async (id, firstname, lastname) => {
  try {
    const person = {
      id: id,
      firstname: firstname,
      lastname: lastname,
    };
    let data = await readData("./data");
    data.push(person);
    await writeData(data, "./data");
  } catch (err) {
    throw err;
  }
};

// Update

// Spread
// const obj1 = {
//   name: "One",
//   age: 20,
// };

// const obj2 = {
//   name: "Two",
//   age: 22,
//   country: "Macedonia",
// };

// const obj3 = {
//   ...obj1,
// name: "One",
// age: 20
//   ...obj2,
// name: "Two",
// age: 22
// country: "Macedonia"
// };

// obj3.name = "One"
// obj3.age = 20

// console.log("obj3", obj3);

const updatePerson = async (id, newPersonData) => {
  try {
    let data = await readData("./data");
    const person = data.find((user) => user.id == id);
    //{"id":1,"first_name":"Pero","last_name":"Perovski"}
    const newPerson = {
      ...person,
      // id: 1
      // first_name: "Pero"
      // last_name: "Perovski"
      ...newPersonData,
      // first_name: "PeroDva"
    };
    data = data.filter((user) => user.id !== id); // bez covekot koj probuvame da go azurirame
    data.push(newPerson);
    await writeData(data, "./data");
  } catch (err) {
    throw err;
  }
};

// Remove

const removePerson = async (id) => {
  try {
    const data = await readData("./data");
    const out = data.filter((person) => person.id !== id);
    await writeData(out, "./data");
  } catch (err) {
    throw err;
  }
};

//IIFE
// (async function () {
//   await updatePerson(1, {
//     first_name: "PeroDva",
//   });
// })();

const updateCar = async (id, newCarData) => {
  try {
    let data = await readData("./cars");
    const car = data.find((car) => car.id === id);
    const newCar = {
      ...car,
      //     "id": 1,
      //     "brand": "Toyota",
      //     "model": "Camry",
      //     "year": 2022
      ...newCarData,
      //     "brand": "BMW",
    };
    data = data.filter((car) => car.id !== id); // -1 car
    // go prebrisuvame momentalniot avtomobil za da
    //go dodame noviot so novite podatoci
    data.push(newCar); // +1 car
    await writeData(data, "./cars");
  } catch (err) {
    throw err;
  }
};

const removeCar = async (id) => {
  try {
    const data = await readData("./cars");
    const cars = data.filter((car) => car.id !== id);
    await writeData(cars, "./cars");
  } catch (err) {
    throw err;
  }
};

(async function () {
  await removeCar(1);
})();

// Napisete go ova so obicna funkcija, namesto vo IIFE

// Remove

// Update

// JSON.parse - od JSON vo JS
// JSON.stringify - od objekt vo JSON

// Homework
// Define 5 different REST Resources - JSON -
// user.json, books.json, cars.json, locations.json, products.json
// CRUD for ONE of the models (use readData and writeData)
