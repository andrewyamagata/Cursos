// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final, remova o primeiro item e exiba o carrinho atualizado.
let exercicio1 = ["Produto A", "Produto B"];

let exercicio1n = exercicio1.slice();
exercicio1n.splice(0, 1, "Produto C");
exercicio1n.sort();
console.log(exercicio1n);

// Outra forma de fazer o exercício 1, porém não podemos usar no exercício 2.
let carrinho = ["Produto A", "Produto B"];
carrinho.push("Produto C");
carrinho.shift();
console.log(carrinho);

// Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final.
let exercicio2 = ["Produto X", "Produto Y"];

exercicio2.push("Produto Z");

let mescla1e2 = exercicio2.concat(exercicio1);
console.log(mescla1e2);

// Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e 'Agenda' estão presentes no estoque.
let exercicio3 = ["Caderno", "Lápis", "Estojo"];

console.log(exercicio3.includes("Lápis"));
console.log(exercicio3.includes("Agenda"));

// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior que 7.
let exercicio4 = [2, 5, 8, 1];

let resultadoSome = exercicio4.some((numero) => numero > 7);
console.log("Resultado: ", resultadoSome);

// Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
let exercicio5 = [4, 6, 8, 2];

let resultadoEvery = exercicio5.every((numero) => numero > 3);
console.log("Resultado: ", resultadoEvery);
