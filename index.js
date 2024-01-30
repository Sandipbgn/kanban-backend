const Bootstrap = require("./src/routes");
const express = require("express");
require("dotenv").config();

function InitServer() {
  const app = express();
  const PORT = process.env.PORT || 8000;

  app.use(express.json());

  require("./src/routes/router")(app);

  app.listen(PORT, () => console.log(`App running on ${PORT}`));
}

InitServer();
