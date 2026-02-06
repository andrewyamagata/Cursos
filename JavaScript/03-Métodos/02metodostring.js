// String - Sequência de caracteres
let string = "Olá, Mundo! Bem vindo Mundo";

console.log(string.toUpperCase()); // Letras maiúsculas
console.log(string.toLowerCase()); // Letras minúsculas

//SLICE(start, end)
console.log(string[0]);

console.log(string.slice(0, 6));

console.log(string.slice(-6)); // De trás para frente

//SUBSTRING(start, end)
console.log(string.substring(0, 6));
console.log(string.substring(-6)); // NÃO aceita negativo. Converter 0 = substring(0)
console.log(string.substring(7, 3)); // Inverte esses valores (3,7)

//REPLACE(search,replacewith)
console.log(string.replace("Mundo", "Javascript")); // não substitui o valor original e não faz em cada ocorrência, somente na primeira
console.log(string);
// Saber a posição
console.log(string.indexOf("Mundo"));
console.log(string.indexOf("Javascript")); // não achado, índice -1

//SPLIT(delimiter[, limit])

let texto = "maçã,banana,laranja,uva";
let frutas = texto.split(","); // delimitador ,
let frutasLimite = texto.split(",", 3); // delimitador , + limite de elementos da nossa lista
let frutas0 = texto.split(); // sem delimitador vira lista com um item
console.log(frutas);
console.log(frutasLimite);
console.log(frutas0);

let texto2 = "maçã   banana        laranja            uva";
let frutasNova1 = texto.split(/\s+/);
let frutasNova2 = texto2.split(/\s+/);
console.log(frutasNova1);
console.log(frutasNova2);

//SPLICE(índice, númeroItensRemover, item1...)
frutas.splice(1, 2);
console.log(frutas);
