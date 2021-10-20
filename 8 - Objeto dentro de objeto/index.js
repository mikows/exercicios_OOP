let pessoa = {
    nome: "Alexandre",
    idade: 18,
    falar: function() {
        console.log(`Meu nome é ${this.nome}`)
        console.log(`eu tenho ${this.idade} anos `)
    },
    aniversario() {
        this.idade ++
        console.log(`Recentemente eu fiz ${this.idade} anos`)
    },
    dizerIdade() {
        console.log(`A minha idade é ${this.idade} anos`)
    },
    carteira: {
        notas: ['2 reais', '5 reais', '20 reais'],
        documentos: ['CNH','RG']
        
    }
}

console.log(pessoa.carteira.notas[2])
console.log(pessoa.carteira.documentos)