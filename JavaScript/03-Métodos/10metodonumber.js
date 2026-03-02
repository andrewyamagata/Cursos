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
