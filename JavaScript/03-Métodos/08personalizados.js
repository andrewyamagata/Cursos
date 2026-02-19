// Método Personalizado

const calculadora = {
    valor1: 0,
    valor2: 0,

    definirValores: function (v1, v2) {
        calculadora.valor1 = v1;
        calculadora.valor2 = v2;
    },

    somar: function () {
        return calculadora.valor1 + calculadora.valor2;
    },
    subtrair: function () {
        return calculadora.valor1 - calculadora.valor2;
    },
    multiplicar: function () {
        return calculadora.valor1 * calculadora.valor2;
    },
    dividir: function () {
        return calculadora.valor1 / calculadora.valor2;
    },
};

// Exemplo de uso
calculadora.definirValores(5, 10);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());
