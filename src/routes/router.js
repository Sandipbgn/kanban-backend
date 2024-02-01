const express = require("express");
const cors = require("cors");

module.exports = (app) => {
  // Enable CORS
  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/api/v1/tasks", require("./tasks.routes"));
};
