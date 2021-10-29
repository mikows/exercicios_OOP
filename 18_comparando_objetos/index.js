function Soldado(nome,arma) {
    this.nome = nome;
    this.arma = arma;
}

const soldado1 = new Soldado("Arnaldo","M4A1");
const soldado2 = new Soldado("Ronaldo","M4A1");
const cloneDoSoldado = new Soldado("Arnaldo","M4A1");
const clonePerfeito = soldado1

console.log(soldado1 === cloneDoSoldado)
console.log(soldado1 === clonePerfeito)