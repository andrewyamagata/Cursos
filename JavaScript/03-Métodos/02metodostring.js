// String - Sequência de caracteres
let string = "Olá, Mundo!";

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
