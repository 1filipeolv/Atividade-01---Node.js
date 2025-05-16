import express from "express";
const router = express.Router();
import Proprietarios from "../models/Proprietarios.js";


router.get("/Proprietarios", async (req, res) => {
  try {
    const proprietarios = await Proprietarios.findAll();
    res.render("proprietarios", { proprietarios });
  } catch (error) {
    console.error("Erro ao buscar proprietários:", error);
    res.status(500).send("Erro ao carregar os dados.");
  }
});


router.post("/Proprietarios/new", async (req, res) => {
  const { nome, cpf, endereco } = req.body;
  try {
    await Proprietarios.create({ nome, cpf, endereco });
    res.redirect("/Proprietarios");
  } catch (error) {
    console.error("Erro ao cadastrar proprietário:", error);
    res.status(500).send("Erro ao cadastrar.");
  }
});

router.get("/Proprietarios/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Proprietarios.destroy({ where: { id } });
    res.redirect("/Proprietarios");
  } catch (error) {
    console.error("Erro ao excluir proprietário:", error);
    res.status(500).send("Erro ao excluir.");
  }
});


router.get("/Proprietarios/edit/:id", async (req, res) => {
  try {
    const proprietario = await Proprietarios.findByPk(req.params.id);
    if (proprietario) {
      res.render("editar-proprietario", { proprietario }); // View separada para edição
    } else {
      res.status(404).send("Proprietário não encontrado.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar proprietário.");
  }
});


router.post("/Proprietarios/update/:id", async (req, res) => {
  const { nome, cpf, endereco } = req.body;
  try {
    await Proprietarios.update({ nome, cpf, endereco }, {
      where: { id: req.params.id }
    });
    res.redirect("/Proprietarios");
  } catch (error) {
    console.error("Erro ao atualizar proprietário:", error);
    res.status(500).send("Erro ao atualizar.");
  }
});

export default router;
