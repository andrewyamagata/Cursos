//EXERCÍCIOS
// 01. Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras maiúsculas.
let string1 = "javascript é divertido";
let resultado1 = string1.replace("javascript", "javascript".toUpperCase());
console.log(resultado1);

// 02. Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e, em seguida, converta essa palavra para letras minúsculas.
let string2 = "Aprendendo Javascript";
let palavra = string2.substring(0, 10).toLowerCase();
console.log(palavra);

// 03. Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por “Javascript”.
let string3 = "Aprendendo Python";
let palavraExtra = string3.slice(11);
let palavraNova = string3.replace(palavraExtra, "Javascript");
console.log(palavraNova);

// 04. Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de produtos e remova o item 'sofá' da lista.
let string4 = "cadeira, mesa, sofá, armário";
let string4Nova = string4.split(", ");
console.log(string4Nova);

string4Nova.splice(string4Nova.indexOf("sofá"), 1);
console.log(string4Nova);
