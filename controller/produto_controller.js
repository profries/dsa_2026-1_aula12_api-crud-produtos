const produtoService = require("../service/produto_service")

async function listar (req, res) {
    const listaProdutos = await produtoService.listar();
    res.json(listaProdutos);
}

async function buscarPorId(req, res) {
    const id = +req.params.id;
    try{
        const produto = await produtoService.buscarPorId(id);
        res.json(produto);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
}

async function inserir(req, res) {
    const produto = req.body;
    try{
        const produtoInserido = await produtoService.inserir(produto);
        res.status(201).json(produtoInserido);
    }
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
}

async function atualizar(req, res) {
    const id = +req.params.id;
    const produto = req.body;
    try{
        const produtoAtualizado = await produtoService.atualizar(id, produto);
        res.json(produtoAtualizado);
    }    
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
}

async function deletar(req, res) {
    const id = +req.params.id;
    try{
        const produtoDeletado = await produtoService.deletar(id);
        res.json(produtoDeletado);
    }    
    catch(err) {
        res.status(err.id).json({erro:err.msg});
    }
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
} 