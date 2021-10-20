let guerreiro = {
    arma: "Espada Longa",
    nivel: 15,
    danoBase: 5,
    atacar: function(){
        console.log(`O guerreiro ataca o monstro e causa ${this.danoBase*this.nivel} de dano`)
    },
    atacarDuasVezes: function(){
        for(i = 2; i > 0; i--)
        this.atacar()
    }
}
guerreiro.atacar()
guerreiro.atacarDuasVezes()