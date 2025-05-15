import express from "express";
const router = express.Router();

const vendas = [
  { numero: "001", valor: 130000, carro: "Honda Civic" },
  { numero: "002", valor: 60000, carro: "Volkswagen Gol" },
  { numero: "003", valor: 145000, carro: "Honda HR-V" },
  { numero: "004", valor: 360000, carro: "Ford Mustang" },
  { numero: "005", valor: 50000, carro: "Fiat Uno" }
];

router.get("/vendas", (req, res) => {
  res.render("vendas", { vendas });
});

export default router;
