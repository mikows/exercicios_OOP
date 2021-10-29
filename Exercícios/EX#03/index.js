function novoNinja(nome,arma,nivel) {
        this.nome = nome ,
        this.arma = arma ,
        this.nivel = nivel,  
        this.atacar = function() {
            console.log(`O ninja atacou com a ${this.arma}`)
        }

    
}
let narutinho = new novoNinja("naruto","kunai",69)
console.log(narutinho.arma)
narutinho.atacar()