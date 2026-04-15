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
