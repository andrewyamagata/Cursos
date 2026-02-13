// Métodos Nativos - Objeto
const produto = {
    nome: "Laptop",
    preco: 2500,
    disponibilidade: true,
};

console.log(Object.keys(produto)); // chave em uma lista
console.log(Object.values(produto)); // valores em uma lista
console.log(Object.entries(produto)); // lista contendo listas de chave e valor

//

Object.assign(produto, { emEstoque: 10, categoria: "Eletrônicos" }); // adicionar novas propriedades
console.log(produto);

Object.defineProperty(produto, "disponibilidade", { value: false });
console.log(produto);
