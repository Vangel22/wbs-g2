const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
// expressjwt go inicijalizira req.auth

const config = require("./pkg/config");
require("./pkg/db");

const {
  login,
  resetPassword,
  register,
  refreshToken,
  forgotPassword,
} = require("./handlers/auth");
const {
  getAll,
  create,
  update,
  remove,
  getSingle,
} = require("./handlers/post");

const api = express();

api.use(express.json());

api.use(
  jwt({
    secret: config.getSection("development").jwt,
    algorithms: ["HS256"],
  }).unless({
    path: [
      "/api/v1/auth/login",
      "/api/v1/auth/register",
      "/api/v1/auth/refreshToken",
      "/api/v1/forgotPassword",
      "/api/v1/auth/resetPassword",
    ],
  })
);

api.post("/api/v1/auth/login", login);
api.post("/api/v1/auth/register", register);
api.post("/api/v1/refreshToken", refreshToken);
api.post("/api/v1/forgotPassword", forgotPassword);
api.post("/api/v1/auth/resetPassword", resetPassword);

api.get("/api/v1/blog", getAll);
api.get("/api/v1/blog/:id", getSingle);
api.post("/api/v1/blog", create);
api.put("/api/v1/blog/:id", update);
api.delete("/api/v1/blog/:id", remove);

api.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedAccess") {
    res.status(401).send("Invalid token...");
  }
  res.status(err.status).send(err.inner.message);
});

api.listen(config.getSection("development").port, (err) => {
  err
    ? console.error(err)
    : console.log(
        `Server started at port ${config.getSection("development").port}`
      );
});
