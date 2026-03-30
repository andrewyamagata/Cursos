// Métodos Nativos - Number
let inteiro = 42;
let numeroPontoFlutuante = 3.4567;
let numeroPontoFlutuante2 = 3.4537;

// Verificar se o número é um inteiro - retornar booleano
console.log(Number.isInteger(inteiro)); //true
console.log(Number.isInteger(numeroPontoFlutuante)); //false

// Formatar número de acordo com as casas decimais
console.log(numeroPontoFlutuante.toFixed(2)); //digitos = casas decimais
console.log(numeroPontoFlutuante2.toFixed(2)); //digitos = casas decimais
console.log(numeroPontoFlutuante.toFixed()); //padrão = 0 casas decimais

// Formatar número precisão específica
console.log(numeroPontoFlutuante.toPrecision(4)); // número dígitos que o numeral irá conter
console.log(inteiro.toPrecision(1)); // O número é arredondado e exibido em notação (4 vezes 10 elevado a 1)
console.log(inteiro.toPrecision(2)); // 42
console.log(inteiro.toPrecision(3)); // 42.0

let flutuanteString = "32.7869";
let inteiroString = "42";

console.log(typeof flutuanteString);

//Converter o valor (geralmente string) para um número
console.log(typeof Number.parseFloat(flutuanteString));
console.log(Number.parseFloat(inteiroString));

//Converter um inteiro para uma string
let numero = 43;
console.log(numero.toString()); //base decimal, não precisa colocar 10
console.log(numero.toString(2)); //base binária
console.log(numero.toString(8)); //base octal
//base vai de 2 - 36

//Converter uma string para um número inteiro, considerando a base numérica (opcional)
console.log(Number.parseInt(flutuanteString));
console.log(Number.parseInt(inteiroString));

console.log(Number.parseFloat(flutuanteString).toFixed(2));

//NaN (Not A Number)
let notANumber = NaN;
let notANumber2 = 0 / 0;
let string = Number("Olá");

console.log(notANumber, notANumber2, string);

//Infinity / - Infinity
let infinito = Infinity; // -Infinity
let infinito2 = 1 / 0; // -1/0
let multiplicacao = Number.MAX_VALUE * 2;

console.log(infinito, infinito2, multiplicacao);
