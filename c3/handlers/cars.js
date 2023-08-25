const { addCar, getAllCars, removeCar, updateCar } = require("../pkg/cars");

// cars.json -> lokalni funkcii koi rabotat so podatocite od cars.json
// handleri - koi gi koristat lokalnite funkcii za da manipuliraat so cars.json
// bidejki gi pristapuvaat podatocite preku internet

const getAll = async (req, res) => {
  try {
    const cars = await getAllCars();
    return res.status(200).send(cars);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

// Napisete go handlerot
const remove = async (req, res) => {
  try {
    const id = req.params.id;
    // your code here...
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getById = (req, res) => {
  try {
    // your code here...
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAll,
  getById,
  remove,
};
