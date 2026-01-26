// Exercícios

// 1. Manipulação de Array
// 1.A Crie um array chamado produtos contendo três nomes de produtos.
let produtos = ["Câmera", "Telefone", "Celular"];
// 1.B Acesse e imprima o segundo produto.
console.log(produtos[1]);
// 1.C Modifique o terceiro produto para "Notebook" e imprima o array atualizado.
produtos[1] = "Notebook";
console.log(produtos);

// 2. Manipulação de Array
// 2.A Crie um array chamado clientes contendo três nomes de clientes.
let clientes = ["Ana", "João", "Carlos"];
// 2.B Adicione um quarto cliente ao array.
clientes[3] = "Julia";
// 2.C Remova o último cliente e imprima o array atualizado.
clientes.length = clientes.length - 1;
console.log(clientes);

// 3. Manipulação de Objetos
// 3.A Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
let produto = {
    nome: "Bicicleta",
    preco: 1650,
    quantidade: 72,
};
// 3.B Acesse e imprima o nome do produto.
console.log(produto.nome);
// 3.C Modifique o preço do produto e imprima o objeto atualizado.
produto.preco = 1045;
console.log(produto);

// 4. Manipulação de Objetos
// 4.A Crie um objeto chamado venda com as propriedades cliente, produto e valor.
let venda = {
    cliente: "Carol",
    produto: "GoPro",
    valor: 2700,
};
// 4.B Adicione a propriedade data ao objeto.
venda.data = "28/03/2026";
// 4.C Remova a propriedade produto e imprima o objeto atualizado.
delete venda.produto;
console.log(venda);

// 5. Manipulação dos Tipos Referências
// 5.A Crie um array estoque e atribua seus valores para um novo array novoEstoque.
let estoque = [10, 20, 63, 82, 40];
novoEstoque = estoque;
// 5.B Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
novoEstoque[2] = 21;
console.log(estoque);
// 5.C Crie um objeto funcionario e atribua seus valores para um novo objeto novoFuncionario.
// 5.D Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi alterado.
