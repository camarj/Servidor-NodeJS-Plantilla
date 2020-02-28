const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

//conectando la Base de datos

mongoose
  .connect("mongodb://localhost/practica-mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log("Db connected"))
  .catch(err => console.log(err));

//Importar Rutas
const indexRoutes = require("./routes/index");

// Settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Rutas

app.use("/", indexRoutes);

//Lavantando server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
