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
    }

}

let calculadora = {
    numeros: 0,
    somar: function(a,b,c){
        this.numeros = a + b + c;
        console.log(`O resultado da soma é ${this.numeros}`)
    },
    subtracao: function(a) {
        this.numeros -= a;
        console.log(`O resultado da subtração é ${this.numeros}`)
    }
}

pessoa.falar()
pessoa.aniversario()
pessoa.dizerIdade()

calculadora.somar(222, 333, 111)
console.log(calculadora.numeros)
calculadora.subtracao(500)
var numero = calculadora.numeros
console.log(calculadora.numeros)