// Metodos - Array
let produtos = ["Carrinho", "Boneca", "Bola"];

produtos.push("Navio", "Corda", 10); // ao final da lista
console.log(produtos);

produtos.unshift("Video Game"); // n início da lista
console.log(produtos);

produtos.pop(); // remover o último elemento
console.log(produtos);

produtos.shift(); // remover o primeiro elemento
console.log(produtos);

// ordenação e mescla

let letras = ["d", "g", "a", "h", "b", "f", "c", "e"];

let numeros = [1, 6, 5, 4, 10, 8, 2, 19, 3];

letras.sort(); // ordenando os elementos
console.log(letras);

letras.reverse(); // reverter os elementos
console.log(letras);

numeros.sort();
console.log(numeros);

numeros.reverse();
console.log(numeros);

let mesclaArray = letras.concat(numeros); // concatenar
console.log(mesclaArray);

//

let frutas = ["maçã", "uva", "laranja"];

console.log(frutas.indexOf("laranja"));

console.log(frutas.splice(1, 1));
