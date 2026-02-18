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

Object.defineProperty(produto, "disponibilidade", { value: false }); // modificar o valor de uma propriedade existente(deixar em string)
console.log(produto);

const pessoa = {
  nome: "Carlos",
  idade: 30,
};

const trabalho = {
  profissao: "Engenheiro",
  cidade: "São Paulo",
};

const funcionario = {};
Object.assign(funcionario, pessoa, trabalho); // copia para um objeto destino
console.log(funcionario);

Object.defineProperty(funcionario, "salario", {
  // adiciona uma nova propriedade, porém mais complicado
  value: 2000,
  enumerable: true,
  writable: true,
  configurable: true,
});
console.log(funcionario);

delete funcionario.salario; // deletando propriedade
console.log(funcionario);
