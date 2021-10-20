function Guerreiro(nome,arma,nivel,danoBase) {
    this.nome = nome;
    this.arma = arma;
    this.nivel = nivel;
    this.danoBase = danoBase;
    this.atacar = function() {
        console.log(`O guerreiro ${this.nome} atacou com a ${this.arma} e causou ${this.danoBase*this.nivel} de dano`)
    }
} 

let guerreiro1 = new Guerreiro("Davidson","Espada",20,5)
console.log(guerreiro1)
guerreiro1.atacar()

let guerreiro2 = new Guerreiro("Arthur","Escudo Sagrado",25,10)
console.log(guerreiro2)
guerreiro2.atacar()