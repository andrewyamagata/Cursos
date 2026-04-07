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

const soma2 = parseFloat(numero1) + parseFloat(numero2); //consegue interpretar que é um número ao usar parseFloat
console.log(soma2);

// Exercício 3: Arredonde valores financeiros
//Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
//casas decimais.

//Exercício 4: Ajustar a precisão de um número
//Você tem um número muito grande e precisa exibi-lo com uma precisão específica.

// Exercício 5: Verificar se a entrada é um número válido
//  Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
//  realizar qualquer operação.

//  Exercício 6: Verificar se o número é finito
//  Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
