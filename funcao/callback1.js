//A ideia do callback é vc passar uma função para uma outra função,
//e quando determinado evento acontencer essa função q eu passei vai ser chamada de volta 
//Essa função callback pode ser chamada várias vezes ou uma unica vez, vai depender do contexto 

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante));
