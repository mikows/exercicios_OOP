function criarCarro(marca, portas, marchaManual){
    return{
        marca: marca,
        portas: portas,
        marcha: marchaManual
    }
}

let carro = criarCarro("Mitsubishi",4,false);

console.log(carro)
console.log(carro.constructor)

function Herói(nome, classe) {
    
        this.nome = nome,
        this.classe = classe
}

let miranha = new Herói("Spider","Araquinideo")
console.log(miranha)
console.log(miranha.constructor)

let obj = {
    teste: "teste"

}
console.log(obj.constructor)

console.log(miranha instanceof Herói)
console.log(carro instanceof Herói)
console.log(obj instanceof Object)