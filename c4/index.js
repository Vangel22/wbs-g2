const express = require("express");
const config = require("./pkg/config");
require("./pkg/db");

const { getAll, getById, remove, addNewCar } = require("./handlers/cars");

const api = express();

api.use(express.json());

api.get("/cars", getAll);
api.get("/cars/:id", getById);
api.delete("/cars/:id", remove);
api.post("/cars", addNewCar);

api.listen(config.getSection("development").port, (err) => {
  err
    ? console.error(err)
    : console.log(
        `Server started at port ${config.getSection("development").port}`
      );
});
