import express from "express";
const router = express.Router();

const proprietarios = [
  { nome: "João Silva", cpf: "123.456.789-00", endereco: "Rua das Palmeiras, 123" },
  { nome: "Maria Oliveira", cpf: "987.654.321-00", endereco: "Av. Brasil, 456" },
  { nome: "Carlos Souza", cpf: "555.888.777-00", endereco: "Rua da Liberdade, 789" },
  { nome: "Ana Lima", cpf: "222.333.444-55", endereco: "Rua do Comércio, 321" },
  { nome: "Paulo Mendes", cpf: "666.999.000-11", endereco: "Av. Paulista, 1000" }
];

router.get("/proprietarios", (req, res) => {
  res.render("proprietarios", { proprietarios });
});

export default router;
