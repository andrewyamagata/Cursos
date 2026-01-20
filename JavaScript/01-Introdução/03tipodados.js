// Tipo primitivos de dados
// String - sequência de caracteres
// "Um texto" - string
// 'Criar uma mensagem' - string
// `Criar mais um texto` - string template

let mensagem = "Olá, ";
let nome = "Paulo";
let mensagem2 = `Olá, ${nome}. Bem vindo ao curso.`;
console.log(mensagem);
console.log(nome);

console.log(mensagem + nome + ". Bem vindo!");

console.log(mensagem2);

// Índice = 0
console.log(nome[0]);
console.log((nome[0] = "S"));
console.log(nome[0]);

// Number
let numero = 30;
let numero1 = -56;
let decimal = 6.78;
// Infinity e NaN

console.log(numero, numero1, decimal);

let string = "10";
let dez = 10;
console.log(string, dez);
console.log(string + dez);
console.log(`${string} e ${dez}`);

//Sistema Binário e Booleanos
let ligado = true; // (verdadeiro = sim = 1)
let desligado = false; // (falso = não = 0)

console.log(true == 1);
console.log(false == 0);

let palavra = "Testando";
console.log(Boolean(palavra));

let numero0 = 0;
console.log(Boolean(numero0));

// Undefined e Null
let mensagem3 = "Olá impressionador";
let preco = 50.0;
let logado = true;

// Undefined
let produto;
let carrinho = undefined;
console.log(produto);
console.log(carrinho);
console.log(typeof produto);
console.log(typeof carrinho);

// Null
let lista = null;
console.log(lista);
console.log(typeof lista);
