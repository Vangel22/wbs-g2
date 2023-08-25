const express = require("express");
const { getAll, getById, remove } = require("./handlers/cars");

const api = express();

api.use(express.json());

// POST - json body

// GET
api.get("/cars", getAll);
// POST
api.get("/cars/:id", getById);
// PUT

// PATCH

// DELETE
api.delete("/cars/:id", remove);

api.listen(10000, (err) => {
  err ? console.error(err) : console.log("Server started at port 10000");
});
