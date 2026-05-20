let listaProdutos = [];
let autoIncrement = 1;

async function listar() {
    return listaProdutos;
}

async function buscarPorId(id) {
    return (listaProdutos.find(
        function(produto) {
            return (produto.id == id);        
        }
    ));
}

async function inserir(produto) {
    if(!produto || !produto.nome || !produto.categoria 
        || !produto.preco) {
            return;
    }

    produto.id = autoIncrement++;
    listaProdutos.push(produto);
    return produto;
}

function buscarIndicePorId(id) {
    return listaProdutos.findIndex((produto) => produto.id === id);
}

async function atualizar(id, produtoAtual) {
    if(!produtoAtual || !produtoAtual.nome || !produtoAtual.categoria 
        || !produtoAtual.preco) {
            return;
    }

    let indice = buscarIndicePorId(id);
    if(indice >= 0) {
        produtoAtual.id = id; 
        listaProdutos[indice] = produtoAtual;
        return listaProdutos[indice];
    }
}

async function deletar(id) {
    let indiceProduto = buscarIndicePorId(id);    
    if(indiceProduto >= 0) {
        return listaProdutos.splice(indiceProduto, 1)[0];
    }
}

async function pesquisarPorCategoria(categoria) {
    return listaProdutos.filter( (produto) => produto.categoria == categoria )
}

async function pesquisarPorNomeLike(nome) {
    return listaProdutos.filter ( (produto) => {
        const produtoNomeUpper = produto.nome.toUpperCase();
        const nomeUpper = nome.toUpperCase();
        return (produtoNomeUpper.search(nomeUpper) >= 0);
    })
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorNomeLike
}