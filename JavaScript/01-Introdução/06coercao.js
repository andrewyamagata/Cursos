// Coerção Implícita
console.log(5 == "5"); // Igualdade - coerção implicita
console.log(5 === "5");
console.log(5 + "5"); // número é convertido para string
console.log("10" + 5);
console.log("10" - 5); // string é convertida para number devido ao operador de subtração
console.log("3" * "2"); // strings são convertidas para number devido ao operador de multiplicação

console.log(null == undefined);

// Coerção Explícita
let numero = 123;
console.log(typeof numero);
numero = String(numero);
console.log(typeof numero);

let numero2 = 45;
console.log(numero2);
console.log(numero2.toString());

let string = "Meu texto";
let num = 0;
console.log(Boolean(string));
console.log(Boolean(num));

let stringNumero = "12345";
console.log(Number(stringNumero));
console.log(Number(string));

let booleano = true;
console.log(String(booleano));
