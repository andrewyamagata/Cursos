// Declaração e Expressão de Função

function soma(a, b) {
    return a + b;
}

let valor = soma(3, 4);
console.log(valor);

let total = soma(3, 4) + 10;
console.log(total);

// Segredo das expressões - outro formato para fazer

let total1 = function soma1(a, b) {
    return a + b;
};
console.log(total1(3, 4));

let total2 = function (a, b) {
    return a * b;
};
console.log(total2(3, 4));
