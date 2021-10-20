let salvaVidas = {
    profissao: "Salva Vidas",
    temTreinamento: true,
    "Esta vivo": "sim"
}

console.log(salvaVidas.profissao)
console.log(salvaVidas.temTreinamento)
console.log(salvaVidas["Esta vivo"])
if(salvaVidas.temTreinamento == true){
    console.log("Ele é qualificado para trabalhar")
}