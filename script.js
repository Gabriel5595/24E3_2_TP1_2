//TP 1.2
//Desenvolva uma função chamada filtrarDisponiveis que receba um array de objetos representando produtos, onde cada produto tem uma propriedade disponivel que é um booleano. A função deve retornar um novo array contendo apenas os produtos que estão disponíveis.

function filtrarDisponiveis(produtos) {
    return produtos.filter(function(produto) {
        return produto.disponivel;
    });
}

const produtos = [ 
    { nome: "Laptop", disponivel: true }, 
    { nome: "Tablet", disponivel: false }, 
    { nome: "Smartphone", disponivel: true } 
];

const produtosDisponiveis = filtrarDisponiveis(produtos);

console.log(produtosDisponiveis);
