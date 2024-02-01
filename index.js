const express = require("express");
require("dotenv").config();

function InitServer() {
  const app = express();
  const PORT = process.env.PORT || 8000;

  app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    console.log(`hitted ${method} on ${url}`);
    next();
  });

  require("./src/routes/router")(app);

  app.listen(PORT, () => console.log(`App running on ${PORT}`));
}

InitServer();
