const {
  addCar,
  getAllCars,
  removeCar,
  updateCar,
} = require("../pkg/cars/mongo");

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

const getById = (req, res) => {
  try {
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
