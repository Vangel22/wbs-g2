const mongoose = require("mongoose");

//method in javascript
// const objectFun = {
//   someMethod: () => {
//     console.log("Hi im method");
//   },
// };

const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    minLength: 2,
  },
  brand: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    validate: {
      validator: (fieldParam) => fieldParam > 2020,
      message: (props) => `Input car is older than 2020`,
    },
  },
  carWeight: {
    type: Number,
    min: 1200,
    max: 3000,
  },
  createdAt: {
    immutable: true,
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Car = mongoose.model("Cars", carSchema, "my_cars");

// function CarObj(model, brand) {
//   this.model = model;
//   this.brand = brand;
// }

// let myNewCar = new CarObj("159", "Alfa romeo");

// CRUD

const addCar = async (car) => {
  const newCar = new Car(car);
  // inside newCar variable we have the new data added in the response in the handler function
  return await newCar.save();
};

const removeCar = async (id) => {
  return await Car.deleteOne({ _id: id });
};

const updateCar = async (id, newCarData) => {
  return await Car.updateOne({ _id: id }, newCarData);
  //...stariPodatoci
  //...noviPodatoci
  //klucevite od noviPodatoci ke gi prezapisat vrednostite od stariPodatoci
};

const getAllCars = async () => {
  return await Car.find({});
};

// getCarById
const getCarById = async (id) => {
  return await Car.findOne({ _id: id });
};

module.exports = {
  addCar,
  updateCar,
  removeCar,
  getAllCars,
  getCarById,
};
