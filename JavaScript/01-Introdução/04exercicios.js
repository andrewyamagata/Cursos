//Exercícios
//01.Escreva um programa simples que exiba uma string no terminal utilizando o console.log
console.log("Olá, Mundo!");

//02.Modifique o programa anterior para armazenar a mensagem em uma variável antes de exibi-la no consolelet string = "Olá, Mundo!";
let string = "Olá, Mundo!";
console.log(string);
console.log(typeof string);

//03.Declare três variáveis mutáveis: nome(string), idade(number) e isStudent(boolean).
let nome = "Abobrinha";
let idade = 20;
let isStudent = true;

//04.Modifique o valor das variáveis anteriores e imprima os novos valores no console.
nome = "Prof Abobrinha";
idade = 25;
isStudent = false;
console.log(nome, idade, isStudent);

//05.Crie uma variável constante que irá armazenar um número e imprima no console.
const numeric = 7.16;
console.log(numeric);

//06.Declare duas variáveis, endereco e telefone, sem atribuir valores a elas.
let endereco;
let telefone;

//07.Declare variáveis com nomes descritivos para armazenar o nome de um produto, seu preço e a quantidade em estoque.
let produto = "Feijão";
let preco = 8.59;
let qtd = 50;
console.log(produto, preco, qtd);

//08.Declare uma variável para armazenar o nome de uma cidade e outra para armazenar a sua população. Exiba uma mensagem combinando ambas as variáveis.
let cidade = "Mogi das Cruzes";
let populacao = 450000;
console.log(
    `A cidade de ${cidade} possui uma população de ${populacao} habitantes`,
);
