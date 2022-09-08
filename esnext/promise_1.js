/*let a = 1;
console.log(a);

console.log(typeof Promise) //uma promise é uma function 
//quando vc cria uma nova promise ele vai criar um objeto

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

console.log(typeof p); //ele vai retornar q é um objeto. 
//Quando vc usa o operador new ele retorna um objeto

p.then(function(valor){  //sempre é devolvido um valor
    console.log(valor.x)
})

//vc pode gerar um objeto, uma lista de valores

//outra forma:

p.then(valor => console.log(valor)) */

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
