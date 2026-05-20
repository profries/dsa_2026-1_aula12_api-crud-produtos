const produtoService = require("./service/produto_service")


async function main() {
    try { 
        await produtoService.inserir({ nome:"Arroz", categoria:"Alimento", preco: 5.00 })
        console.log("Produto arroz cadastrado com sucesso!");
    }
    catch(err) {
        console.log("Erro", err.msg)
    }
    try{
        await produtoService.inserir({ nome:"Massa", preco: 3.00 })
    }
    catch(err) {
        console.log("Erro", err.msg)
    }
    try{
        await produtoService.inserir({ nome:"Feijao", categoria:"Alimento", preco: 8.00 })
    }
    catch(err) {
        console.log("Erro", err.msg)
    }
    try { 
        await produtoService.inserir({ nome:"Suco", categoria:"Bebida", preco: 11.00 })
    }
    catch(err) {
        console.log("Erro", err.msg)
    }
    console.log(await produtoService.listar());

    try {
        console.log(await produtoService.buscarPorId(2));
    } catch(err) {
        console.log("Erro", err.msg)
    }

    try {
        console.log(await produtoService.buscarPorId(100));
    } catch(err) {
        console.log("Erro", err.msg)
    }

    //atualizar
    try{
        await produtoService.atualizar(2, {nome:"Feijao", categoria:"Alimento", preco:8.5});
    } catch(err) {
        console.log("Erro", err.msg);
    }

    //deletar
    try{
        await produtoService.deletar(3);
    } catch(err) {
        console.log("Erro", err.msg);
    }

    console.log(await produtoService.listar());
}

main();