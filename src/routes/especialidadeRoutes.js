const { buscarEspecialidades } = require("../controllers/especialidadeController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await buscarEspecialidades());
});

router.get("/:id", (req, res) => {
    res.send("Busca uma especialidade por id");
});

router.post("/", (req, res) => {
    res.send("Cria uma especialidade");
});

router.put("/:id", (req, res) => {
    res.send("Edita uma especialidade");
});

router.delete("/:id", (req, res) => {
    res.send("Deleta uma especialidade");
});

module.exports = router;
