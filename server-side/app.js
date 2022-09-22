const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./router");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/", routes);

module.exports = app;
