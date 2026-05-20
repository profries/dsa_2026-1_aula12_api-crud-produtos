const express = require ("express")
const produtoRouter = require("./router/produto_router")

const app = express();
app.use(express.json()) // for parsing application/json

app.get("/hello", (req, res) => {
    res.send("Hello World");
})

app.use("/api/produtos", produtoRouter);

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000");
})