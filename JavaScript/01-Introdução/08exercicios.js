// Exercícios
// 01: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00.
// Além disso, há um imposto de R$ 12,00 sobre o preço com desconto.
// Calcule o preço final do produto após aplicar o desconto e o imposto.
// Exemplo de Saída: “Preço final do produto: R$ 172”
let produto = 200;
let desconto = 40;
let imposto = 12;
let descontoImposto = desconto - imposto;
let produtoFinal = produto - descontoImposto;
console.log(`Preço final do produto: R$ ${produtoFinal}`);

// 02: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional de R$ 30,00.
// Calcule o preço de venda do produto.
// Exemplo de Saída: “Preço de venda do produto: R$ 130”
let produto2 = 100;
let lucro2 = 30;
let precoVenda = produto2 + lucro2;
console.log(`Preço de venda do produto: R$ ${precoVenda}`);

// 03: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento.
// O custo do produto é R$ 300,00.
// Exemplo de Saída: “Preço com desconto: R$ 250” e “Está dentro do orçamento? True”
let orcamento = 250;
let desconto3 = 50;
let custo3 = 300;
let precoDesconto = custo3 - desconto3;
let dentroOrcamento = orcamento >= precoDesconto;
console.log(
    `Preço com desconto: R$ ${precoDesconto} e está dentro do orçamento? ${dentroOrcamento}`,
);

// 04: Você tem duas variáveis, uma que representa a quantidade de produtos em um estoque como uma string ("20")
// e outra que representa a quantidade mínima necessária de produtos no estoque como um número (20).
// Verifique se a quantidade atual de produtos é suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um número.
// Imprima no console se a quantidade é suficiente ou não.
// Exemplo de Saída: “A quantidade no estoque é suficiente: true”

// 05: Você tem três variáveis: uma que representa se um produto está disponível como um booleano (true),
// outra que representa a quantidade de produtos no estoque (10), e uma terceira que representa a quantidade mínima necessária de produtos no estoque (15).
// Verifique se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade mínima necessária) usando operadores lógicos NOT e AND.
// Imprima no console se o produto está disponível e tem a quantidade suficiente.
// Exemplo de Saída: “'O produto está disponível e tem quantidade suficiente: false” e “'O produto está indisponível: false”
