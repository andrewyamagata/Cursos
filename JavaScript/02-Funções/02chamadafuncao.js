// Chamadas de funções

function exibirDetalhes(nome, curso) {
    console.log("Professor: " + nome + " Curso: " + curso); // instrução
}

exibirDetalhes("Eleuterio", "Química");

// Parâmetros e Argumentos

// function nomeFuncao(PARÂMETRO) {INSTRUÇÃO}

function soma(numero1, numero2) {
    console.log(numero1 + numero2);
}

// nomeFunction(ARGUMENTO) - Chamada da função (executa o bloco de instruções)
soma(8, 57);

// Exemplo
function calcularPrecoTotal(precoUnitario, quantidade) {
    let total = precoUnitario * quantidade;
    console.log("O total da sua compra é: R$ " + total);
}
calcularPrecoTotal(37.9, 128);
// Pode ser feito assim também
function calcularPrecoTotal(precoUnitario, quantidade) {
    let total = precoUnitario * quantidade;
    console.log("O total da sua compra é: R$ " + total);
}
let camiseta = 29.58;
let quantidadeItem = 39;
calcularPrecoTotal(camiseta, quantidadeItem);
