import express from "express";
const router = express.Router();

const carros = [
  { nome: "Honda Civic", preco: 130000, categoria: "Sedan", ano: 2024, imagem: "civic.png" },
  { nome: "Volkswagen Gol", preco: 60000, categoria: "Popular", ano: 2022, imagem: "gol.png" },
  { nome: "Honda HR-V", preco: 145000, categoria: "SUV", ano: 2024, imagem: "hrv.png" },
  { nome: "Ford Mustang", preco: 360000, categoria: "Esportivo", ano: 2023, imagem: "mustang.png" },
  { nome: "Fiat Uno", preco: 50000, categoria: "Popular", ano: 2020, imagem: "uno.png" }
];

router.get("/carros", (req, res) => {
  res.render("carros", { carros });
});

export default router;
