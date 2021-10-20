function CriarRobo(ativo, colunas, proxy){
    return {
        ativo: ativo,
        colunas: colunas,
        proxy:  proxy,
        rodar: function(){
            console.log("O robô está rodando em produção")
        },
        quantasColunas: function(){
            console.log(`Este coletor tem ${this.colunas} colunas`)
        },
        estaAtivo: function(){
            if (this.ativo == true)  {
                console.log("O robo está ativo")
            }
            
            if (this.ativo == false)  {
                console.log("O robo não está ativo")
            }
        },
        status: function(){
            if(this.ativo == true){
                this.ativo= "ativo"
            }
            else{
                this.ativo = "não está ativo"
            }
            if(this.proxy == true){
                this.proxy= "o Proxy está ativo"
            }
            else {
                this.proxy = "o Proxy não está ativo"
            }
            console.log(`Este coletor está ${this.ativo}, tem ${this.colunas} colunas e ${this.proxy}`)
        }
    }
}
let Prefeitura1 = CriarRobo(true,5,false)
let Prefeitura2 = CriarRobo(false,4,true)
console.log(Prefeitura1)
console.log(Prefeitura2)
Prefeitura1.rodar()
Prefeitura1.status()
Prefeitura1.estaAtivo()
Prefeitura1.quantasColunas()
Prefeitura2.status()
Prefeitura2.rodar()