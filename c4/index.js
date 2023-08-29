const express = require("express");
const { getAll, getById, remove } = require("./handlers/cars");

const api = express();

api.use(express.json());

api.get("/cars", getAll);
api.get("/cars/:id", getById);
api.delete("/cars/:id", remove);

api.listen(10000, (err) => {
  err ? console.error(err) : console.log("Server started at port 10000");
});
