let teste = {
    a: 1,
};

let teste2 = {
    a:1,
};

console.log(Object.is(teste,teste2))
console.log(Object.is(NaN,NaN));
console.log(NaN === NaN)
console.log(+0 === -0)
let teste3 = teste

console.log(Object.is(teste,teste3));
console.log(teste === teste3)