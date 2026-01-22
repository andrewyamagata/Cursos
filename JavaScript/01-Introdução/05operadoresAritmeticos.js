//Operações Básicas em Javascript
//Adição
let valor = 10;
let segundoValor = -43;

console.log(valor + segundoValor);

let mensagem = "20";
console.log(mensagem + valor); //concatenação(string + number)

//Subtração
console.log(valor - segundoValor);
console.log(segundoValor - valor);

//Divisão
console.log(valor / segundoValor);
console.log(segundoValor / valor);

//Módulo - resto da divisão
console.log(valor % segundoValor);
console.log(segundoValor % valor);

//Operações Avançadas em Javascript
//Exponenciação
let base = 2;
let expoente = 3;
let resultado = base ** expoente;
console.log(resultado);

// Incremento ++ (adicionar o valor de 1) Decremento -- (diminuir o valor 1)
let controle = 0;
console.log(controle++);
console.log(controle);
console.log(controle++);
console.log(controle);

let controle2 = 0;
console.log(++controle2);
console.log(++controle2);
console.log(++controle2);
console.log(++controle2);

//Operadores de Comparação
//Igualdade ==
console.log(5 == "5");

//Igualdade estrita ===
console.log(5 === "5"); // boa prática utilizar, verifica também se o tipo é igual.

//Desigualdade !=
console.log(5 != "5");

//Desigualdade estrita !==
console.log(5 !== "5"); // boa prática

//Maior e menor
console.log(10 > 20);
console.log(10 < 20);

//Maior igual e menor igual
console.log(10 >= 10);
console.log(10 <= 20);

//Exemplo
let senha = 1234;
let senhaDigitada = 1234;
let compararSenha = senha === senhaDigitada;
console.log("Aqui é a minha senha: " + compararSenha);
