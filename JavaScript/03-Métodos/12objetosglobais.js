//Objetos Globais
//Math = operações matemáticas e Date = datas

// Operações:

const PI = Math.PI;
console.log(PI);

const raizQuadrada = Math.sqrt(16);
console.log(raizQuadrada);

const potencia = Math.pow(2, 8);
console.log(potencia);

// Arredondamento

let numero = 3.45; // 4 - para baixo
let numero2 = 3.55; // 5 - para cima

console.log(Math.round(numero));
console.log(Math.round(numero2));

//Sem usar o operador Math
console.log(parseInt(numero));
console.log(parseInt(numero2));

// Valor aleatório entre 0 e 1

console.log(Math.random());

const aleatório = Math.random() * 100;
console.log(parseFloat(aleatório.toFixed(2)));

const aleatorio2 = Number.parseFloat((Math.random() * 100).toFixed(2));
console.log(aleatorio2);

// Math.min() - retorna o valor mínimo encontrado dentro de uma lista
// Math.max() - retorna o valor máximo encontrado dentro de uma lista

console.log(Math.min(2, 45, 6, 87, 43));
console.log(Math.min([2, 45, 6, 87, 43])); // erro - retorna NaN

console.log(Math.max(2, 45, 6, 87, 43));

// Forma para fazer com lista

let lista = [2, 45, 6, 87, 43, 101];

console.log(Math.min(...lista)); // spread operador .. (espalha informações da lista)
console.log(Math.max(...lista));
