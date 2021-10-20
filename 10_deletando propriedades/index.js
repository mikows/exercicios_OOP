let pessoa = {
nome: "Eduardo"
}
pessoa.idade = 18;

pessoa.falar = function() {
    console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
}

console.log(pessoa)
console.log(pessoa.idade);
pessoa.falar()
pessoa.nome = "Cleber"
pessoa.falar()
console.log(pessoa)
delete pessoa.idade