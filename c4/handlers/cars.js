const {
  addCar,
  getAllCars,
  removeCar,
  updateCar,
  getCarById,
} = require("../pkg/cars/mongo");

const addNewCar = async (req, res) => {
  try {
    // { model: "m5", brand: "bmw" }
    await addCar(req.body);
    return res.status(201).send(req.body);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getAll = async (req, res) => {
  try {
    const cars = await getAllCars();
    return res.status(200).send(cars);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await removeCar(id);
    return res.status(200).send("Car deleted!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const carFound = await getCarById(id);
    return res.status(200).send(carFound);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAll,
  getById,
  remove,
  addNewCar,
};
