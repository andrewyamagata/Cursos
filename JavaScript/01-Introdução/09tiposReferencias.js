// Tipos Referências - objetos arrays funções
let nome = "João";
nome[0] = "M";
console.log(nome);

let idade = 30;
idade = 31;
console.log(idade);

// Array
let lista = ["Banana", 23, true, "Maçã"]; // índice 0

lista = ["Banana", "maçã", "pera"];

console.log(lista);

lista[0] = "laranja";
console.log(lista[0]);

console.log(lista);

// Array
let lista2 = ["Monitor", "Teclado", "Mouse"];

console.log(lista2[0]);
console.log(lista2[1]);
console.log(lista2[2]);

lista2[0] = "WebCam";
console.log(lista2);

console.log(lista2.length);

lista2[3] = "Monitor";
console.log(lista2);

console.log(lista2.length);

lista2[5] = "Gabinete";
console.log(lista2);

lista2.length = lista2.length - 2;
console.log(lista2);

// Array
let matrizVendas = [
    [100, 200, 300],
    [400, 500, 50], // loja b
    [700, 400, 450],
];

console.log(matrizVendas);
console.log(matrizVendas[1]);

matrizVendas[1][2] = 500;
console.log(matrizVendas);

let resultadoLojaB =
    matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];
console.log(resultadoLojaB);

// Objeto

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "Prata",
    airbag: true,
    itens: ["abs", "4 portas", "step"],
};

// Acessar os valores das propriedades (chaves)

console.log(carro.marca);
console.log(carro.itens[1]);

console.log(carro["modelo"]);

carro.cor = "Azul";
console.log(carro);

carro.kmRodado = 15000;
console.log(carro);

//
let livro = {
    titulo: "Javascript para iniciantes",
    autor: "João Silva",
    ano: 2021,
    genero: "Programação",
};

console.log(livro.titulo);

livro.paginas = 300;
console.log(livro);

livro["idioma"] = "Português";
console.log(livro);
console.log("idioma" in livro);

delete livro.idioma;
console.log(livro);

console.log("autor" in livro);
console.log("idioma" in livro);

// Manipulação dos tipos referências
let listaA = [1, 2, 3];

let listaB = listaA;
listaB[0] = 99;
console.log(listaB);
console.log(listaA);

let string = "Olá";
let mensagem = string;
mensagem = "Olá, Bem vindo";

console.log(mensagem);
console.log(string);

let objA = { nome: "Millene" };
let objB = objA;
objB.idadeObj = 34;

console.log(objB);
console.log(objA);

let listaC = [...listaA];
console.log(listaC);
listaC[3] = 100;

console.log(listaC);
console.log(listaA);

let objC = { ...objA };
objC.corCabelo = "Castanho";
console.log(objC);
console.log(objA);
