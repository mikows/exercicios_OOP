let obj = {
    numero: 1

}

console.log(obj.numero)
let copia = obj

copia.numero = 5;

console.log(obj)
console.log(copia)

obj.numero = 3;

console.log(copia.numero)