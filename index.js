const express = require("express");
const app = express();
const cors = require("cors")
const port = 8000

// importando rotas

const especialidadeRoutes = require("./src/routes/especialidadeRoutes");

//middlewares = insterceptadores
app.use(express.json()); //converte o corpo da requisição em json
app.use(cors()); //libera requisições que vierem de outro dominio

app.get("/",(req,res) => {
    res.send("Olá mundo");
});

app.get("/boas-vindas/:nome",(req,res) => {
    res.send(`Seja bem vindo(a) ${req.params.nome}`);
});

app.use("/especialidades", especialidadeRoutes);


app.listen(port, () => {
    console.log(`O Servidor de pé: http://localhost:${port}`);
});

