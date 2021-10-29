let portas = 4;
let rodas = 4;
let marca = "BMW";
let automatico = true;
let t = "tipo_de_";

let carro = {
    rodas,
    portas,
    marca,
    automatico,
    
    ligar() {
        console.log("O carro ligou uhu :|")
    },
    desligar: function() {
        console.log("carro desligou :|")
    }

};

let barco = {
 [t+'barco']: "Lancha"    
}

let aviao = {
    [t+'Avião']: "Boeing"    
   }
   

console.log(aviao)

console.log(carro);

console.log(carro.rodas);
carro.ligar()
carro.desligar()