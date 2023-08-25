const { readData, writeData } = require("../files");
const DATA_SOURCE = `${__dirname}/../../cars`;
// c:/usereden/projects/javascript-ac/class3

const addCar = async (car) => {
  try {
    const data = await readData(DATA_SOURCE);
    data.push(car);
    await writeData(data, DATA_SOURCE);
  } catch (err) {
    throw err;
  }
};

const removeCar = async (id) => {
  try {
    const data = await readData(DATA_SOURCE);
    const newData = data.filter((car) => car.id !== id);
    await writeData(newData, DATA_SOURCE);
  } catch (err) {
    throw err;
  }
};

const updateCar = async (id, newCarData) => {
  try {
    let data = await readData(DATA_SOURCE);
    const carFound = data.find((car) => car.id === id);
    if (carFound) {
      const newCar = {
        ...carFound,
        ...newCarData,
      };
      data = data.filter((car) => car.id !== id); //go briseme toj avtomobil
      data.push(newCar);
      await writeData(data, DATA_SOURCE);
    } else {
      console.log("Car not found!");
    }
  } catch (err) {
    throw err;
  }
};

const getAllCars = async () => {
  try {
    const data = await readData(DATA_SOURCE);
    return data;
  } catch (err) {
    throw err;
  }
};

// getCarById
const getCarById = async (id) => {
  // vrati go avtomobilot so id koe e dadeno kako parametar na funkcijata
};

module.exports = {
  addCar,
  getAllCars,
  removeCar,
  updateCar,
};
