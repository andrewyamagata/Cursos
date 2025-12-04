console.log("Estamos dentro de uma outra pasta");
// declaração do tipo + nome da variável = informação

// TIPO LET
let mensagem = "Olá Impressionador";
console.log(mensagem);

// declaração do tipo LET
let cor = "vermelho";
console.log(cor);
// redeclaração não é permitido -> let cor = "azul"
cor = "azul"; //reatribuição correta
console.log(cor);

// TIPO CONST
const segundaMensagem = "Bem vindo ao curso Impressionador!";
console.log(segundaMensagem);

//tipo const não pode ser redeclarada ou criada novamente
//não é mutável - não podemos reatribuir o valor -->> segundaMensagem = "Quero trocar a mensagem da minha variável";

// TIPO VAR
nome = "Nome"; //declaração está incorreto
console.log(nome);

var nome = "MeuNome";
console.log(nome);

var nome = "OutroNome"; //redeclararmos pode gerar erro
console.log(nome);

nome = "NossoNome";
console.log(nome);