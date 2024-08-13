const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors'); 
app.use(cors());

const db = require("../models");
const { json } = require("sequelize");

//Routers
const postRouter = require("./routes/UsersApi");
app.use("/Users", postRouter)

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running at PORT: 3001");
  });
});
