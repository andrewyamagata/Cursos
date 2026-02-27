// Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade, precoUnitario e desconto.
// Adicione um método chamado calcularTotal que calcule o valor total da venda, considerando o desconto.
// Adicione também um método chamado detalharVenda que retorne uma string detalhando a venda.

const Venda = {
    produto: "Calça",
    quantidade: 15,
    precoUnitario: 120,
    desconto: 0,
    calcularTotal: function () {
        const total = this.quantidade * this.precoUnitario;
        return total - total * (this.desconto / 100);
    },

    detalharVenda: function () {
        return `Produto: ${this.produto}, 
        Quantidade: ${this.quantidade},
        Preço Unitário: ${this.precoUnitario},
        Total: ${this.calcularTotal()}`;
    },
};

console.log(Venda.detalharVenda());

// Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe um valor percentual e atualiza o desconto da venda.
// Aplique um desconto de 10% e verifique o valor total com o método calcularTotal.

Venda.aplicarDesconto = function (percentual) {
    this.desconto = percentual;
};

Venda.aplicarDesconto(10);
console.log(
    `O desconto foi de: ${Venda.desconto}%, a Venda: ${Venda.detalharVenda()}`,
);

// Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que recebe um número e altera a quantidade do produto na venda.
// Atualize a quantidade e verifique o total da venda após a atualização.
Venda.atualizarQuantidade = function (novaQuantidade) {
    this.quantidade = novaQuantidade;
};

Venda.atualizarQuantidade(780);
console.log(
    `A quantidade foi de: ${Venda.quantidade}, a Venda: ${Venda.detalharVenda()}`,
);

// Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade disponível em estoque e
// retorna uma mensagem fixa indicando se a venda pode ser realizada ou se é necessário ajustar a quantidade.
Venda.verificarEstoque = function (estoqueDisponivel) {
    return "Verificação concluída: " + (this.quantidade <= estoqueDisponivel);
};

console.log(Venda.verificarEstoque(0));

// Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda. Exiba as propriedades e valores em um formato legível.

const entradas = Object.entries(Venda);
console.log(entradas);

// Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda. Exiba as propriedades do objeto.

const chaves = Object.keys(Venda);
console.log(chaves);

// Exercício 7: Obtenha um array com todos os valores das propriedades do objeto Venda. Exiba os valores das propriedades.

const valores = Object.values(Venda);
console.log(valores);

// Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a verificação diretamente em uma mensagem fixa.

function verificarPropriedadeDesconto() {
    return "Verificação concluída: " + Venda.hasOwnProperty("desconto");
}

console.log(verificarPropriedadeDesconto());

// Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e valores de Venda, mas com um produto e quantidade diferentes.
// Exiba o novo objeto NovaVenda.

const novaVenda = Object.assign({}, Venda, {
    produto: "Notebook",
    quantidade: 37,
});

console.log(novaVenda);

// Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não enumerável. Exiba todas as propriedades do objeto Venda e,
// em seguida, exiba o valor da nova propriedade data separadamente.

Object.defineProperty(Venda, "data", {
    value: "2026-02-27",
    enumerable: false,
});

console.log(Object.keys(Venda));

// Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto Venda, mas com um desconto fixo de 20%.
// Exiba as propriedades do novo objeto e verifique se o desconto foi aplicado corretamente.

const descontoEspecial = Object.create(Venda);
descontoEspecial.desconto = 20;
console.log(descontoEspecial.detalharVenda());
console.log(Venda.detalharVenda());

// Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade foi removida com sucesso e exiba as propriedades restantes do objeto.

delete Venda.desconto;
console.log(Object.keys(Venda));
