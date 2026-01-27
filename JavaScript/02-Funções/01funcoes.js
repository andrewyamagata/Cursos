function saudacao(nome) {
    console.log(`Olá ${nome}, bem vindo ao nosso site!`);
}

saudacao("Carol");
saudacao("Daniel");
saudacao("Lira");

// function nomeFuncao() {instrução} - sintaxe basica

// Mensagem para iniciar o cadastro
function enviarMensagem() {
    console.log(
        "Para continuar você precisa informar o seu nome para cadastro!",
    );
}

// enviarMensagem(); - chamar a função, nesse caso, chamamos a função na main

// Cadastro de usuário

function cadastrar(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}, você foi cadastrado com sucesso!`);
}

// cadastrar("Milenna", "Galetti"); - chamar a função, nesse caso, chamamos a função na main

// Operações matemáticas

function banco(deposito, saque) {
    let saldo = deposito - saque;
    return saldo;
}
// console.log(banco(1000, 60)); - chamar a função, nesse caso, chamamos a função na main

// Função principal - MAIN

function main() {
    enviarMensagem();
    cadastrar("Daniel", "Porto");
    let saldo = banco(750, 93);
    console.log(`O saldo atual da sua conta é de R$ ${saldo} reais`);
}

main();
