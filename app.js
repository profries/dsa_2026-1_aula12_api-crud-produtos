const express = require ("express")
const produtoController = require("./controller/produto_controller")

const app = express();
app.use(express.json()) // for parsing application/json

app.get("/hello", (req, res) => {
    res.send("Hello World");
})

app.get("/api/produtos", produtoController.listar);
app.get("/api/produtos/:id", produtoController.buscarPorId);
app.post("/api/produtos", produtoController.inserir)
app.put("/api/produtos/:id", produtoController.atualizar);
app.delete("/api/produtos/:id", produtoController.deletar);

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000");
})