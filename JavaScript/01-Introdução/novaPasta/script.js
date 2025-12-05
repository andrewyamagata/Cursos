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

// DIFERENÇAS ENTRE OS TIPOS DE DECLARAÇÃO

// Redeclarações
let nomeAluno = "Millene"; //Erro
const nomeProfessor = "Daniel"; //Erro

var mensagemTres = "Olá";
console.log(mensagemTres);
var mensagemTres = "Bem vindo";
console.log(mensagemTres);

// Reatribuições - Mutabilidade
nomeAluno = "Lira";
console.log(nomeAluno);
//tipo const gera erro
mensagemTres = "Olá, bem vindo!";
console.log(mensagemTres);

// Hoisting
console.log(mensagemQuatro);
var mensagemQuatro = "Utilizando Hoisting";
console.log(mensagemQuatro);
//Let e Const - Não fazem Hoisting

// Visibilidade
//{instruções} // Bloco de instrução
//function() {instruções - tarefas especificas}