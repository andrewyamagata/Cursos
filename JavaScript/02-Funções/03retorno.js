// Retorno de uma função

let pedido = {
    id: 1234,
    nome: "João",
    email: "joao@email.com",
    lanche: 12,
    batataFrita: 6,
    suco: 4,
};

// Múltiplos Parâmetros

// 3 parâmetros
function enviarNotificacao(nome, idPedido, email) {
    console.log(
        `Enviando e-mail para ${email} confirmando o pedido de número ${idPedido}`,
    );
    console.log(`Mensagem: ${nome} pedido confirmado`);
}

enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// Função principal que irá calcular e retornar o valor do pedido
// 4 parâmetros
function processarPedido(id, item1, item2, item3) {
    let totalPedido = item1 + item2 + item3;
    console.log("Pedido: " + id + " Processado");
    console.log("O total do pedido é: R$ " + totalPedido);
    return totalPedido; // encerrou a nossa função
}

let retornoDaFuncao = processarPedido(
    pedido.id,
    pedido.lanche,
    pedido.batataFrita,
    pedido.suco,
);

console.log(retornoDaFuncao);
