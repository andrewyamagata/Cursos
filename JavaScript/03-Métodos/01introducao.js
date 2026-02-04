// Métodos - funções associadas a objetos que permitem realizar ações ou manipular os dados desses objetos.
// MÉTODOS NATIVOS

//Converte uma string para maiúsculas
// toUpperCase();

//Verifica se uma string contém outra string
// includes();

//Adicionar um elemento ao final de um array
// push();

//Verifica se um objeto possui uma propriedade específica
// hasOwnProperty();

console.log("Olá Impressionador");
console.error("Deu ruim!");

function saudacao(nome) {
    return `Olá, ${nome}`;
}

console.log(saudacao("Ana"));
console.log(saudacao("Paulo"));
console.log(saudacao("Mirna"));

const pessoa = {
    nome: "Clara",
    saudacao: function () {
        return `Olá, ${pessoa.nome}`;
    },
};

console.log(pessoa.saudacao());
