let piloto = {
    nome: "João",
    idade: 28,
    habilitação: true,
    resume: function() {
        console.log(`O Piloto se chama ${this.nome} e tem ${this.idade} anos.`)
    }
}

console.log(piloto);
console.log(piloto.idade)
console.log(piloto.nome)
console.log(piloto.habilitação)
piloto.resume()