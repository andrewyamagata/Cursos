// Escopo Global - Local (Função) - Bloco

let global = "Sou do escopo Global";

function mensagem() {
    // escopo local da minha função
    let local = "Sou local da função";
    console.log(local);
}

mensagem();
console.log(global);

// não é uma função - escopo de bloco
if (true) {
    let bloco = "Sou do bloco do IF";
    console.log(bloco);
}
