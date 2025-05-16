import express from "express";
const app = express();

import CarrosController from "./controllers/CarrosController.js";
import ProprietariosController from "./controllers/ProprietariosController.js";
import VendasController from "./controllers/VendasController.js";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.use("/", CarrosController);
app.use("/", ProprietariosController);
app.use("/", VendasController);

import connection from "./config/sequelize-config.js";

connection.authenticate().then(() => {
  console.log("Conexão com o banco realizado com sucesso!")
}).catch((error) => {
  console.log(error)
})

connection.query("CREATE DATABASE IF NOT EXISTS sistemaLoja;").then(() =>{
  console.log("O banco de dados está criado!");
}).catch((error) => {
  console.log(error);
})

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8083, (error) => {
  if (error) {
    console.log("Erro ao iniciar servidor: " + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
