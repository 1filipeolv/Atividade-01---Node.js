import express from "express";
const app = express();

import CarrosController from "./controllers/CarrosController.js";
import ProprietariosController from "./controllers/ProprietariosController.js";
import VendasController from "./controllers/VendasController.js";

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", CarrosController);
app.use("/", ProprietariosController);
app.use("/", VendasController);

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
