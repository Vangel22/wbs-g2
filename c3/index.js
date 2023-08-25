const express = require("express");
const { getAll, getById, remove } = require("./handlers/cars");

const api = express();

api.use(express.json());

// POST - json body

// GET
api.get("/cars", getAll);
api.get("/cars/:id", getById);
// POST
// api.post
// PUT
// api.put
// PATCH
// api.patch
// DELETE
api.delete("/cars/:id", remove);

api.listen(10000, (err) => {
  err ? console.error(err) : console.log("Server started at port 10000");
});

// handleri - komuniciraat so server i klient
// pkg - osnovni funkcii za avtomobili koi go manipuliraat cars.json fajlot
// pkg/files - mi koristi za citanje i zapisuvanje na novi podatoci vo cars.json

// pkg komunicira so handler
// handler komunicira so index.js (t.e fajlot kade sto definirame express)

// h3 -> handlers, pkg
// pkg -> cars
// cars -> index.js
