const express = require("express");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/api/v1/tasks", require("./tasks.routes"));
};
