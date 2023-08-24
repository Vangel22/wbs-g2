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

const removePerson = async (id) => {};

//IIFE
(async function () {
  await addPerson(4, "Semos", "Education");
  await addPerson(5, "Petar", "EdenDva");
})();

// Remove

// Update

// JSON.parse - od JSON vo JS
// JSON.stringify - od objekt vo JSON
