//Operadores Lógicos
// AND - && - amabas as condições são verdadeiras
let idade = 20;
let codigoPromocional = true;

let idade2 = 15;
//verificação se o usuário tem idade suficiente e possui um código
let podeFazerLogin = idade >= 18 && codigoPromocional; // true
console.log(podeFazerLogin);
let podeFazerLogin2 = idade2 >= 18 && codigoPromocional;
console.log(podeFazerLogin2);

// OR - || - apenas uma condição é verdadeira
let loginOr = idade >= 18 || codigoPromocional;
console.log(loginOr);
let loginOr2 = idade2 >= 18 || codigoPromocional;
console.log(loginOr2);

let codigoPromocional2 = false;
console.log(idade2 >= 18 || codigoPromocional2);

// NOT - ! - inverte valor booleano
let perfilConfigurado = false;

//verificação se o perfil não está configurado
let alerta = !perfilConfigurado;
console.log(alerta);
