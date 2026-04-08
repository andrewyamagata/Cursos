//Exercício 1: Converta valores de texto em números
//Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
//convertê-los para números reais.

const valor1 = "150.50";
const valor2 = "200px";
const valor3 = "abc";

console.log(Number.parseFloat(valor1));
console.log(Number.parseInt(valor2));
console.log(Number.parseFloat(valor3));

// Exercício 2: Somar valores numéricos de uma entrada de formulário
//Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.

const numero1 = "10";
const numero2 = "20.5";

const soma = Number.parseFloat(numero1) + Number.parseFloat(numero2);
console.log(soma);

const soma2 = parseFloat(numero1) + parseFloat(numero2); //consegue interpretar que é um número ao usar parseFloat direto semo Number
console.log(soma2);

// Exercício 3: Arredonde valores financeiros
//Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
//casas decimais.

const valorFinanceiro = 1234.56789;
const valorFormatado = valorFinanceiro.toFixed(2);
console.log(`Valor formatado: ${valorFormatado}`); //1234.57

//Exercício 4: Ajustar a precisão de um número
//Você tem um número muito grande e precisa exibi-lo com uma precisão específica.

const valorGrande = 12345.6789;
const valorGrandeFormatado = valorGrande.toPrecision(4);
console.log(`Valor com precisão é ${valorGrandeFormatado}`); // 1.235e+4

// Exercício 5: Verificar se a entrada é um número válido
//  Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
//  realizar qualquer operação.

const entrada = "123abc";
const entradaValida = "123";

//  Exercício 6: Verificar se o número é finito
//  Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
