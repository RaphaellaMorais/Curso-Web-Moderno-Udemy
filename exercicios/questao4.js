//04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

/*function operacaoDivisao (dividendo, divisor) {
    return dividendo / divisor
}
console.log("Resultado com resto: " + (operacaoDivisao(105, 2))); */


function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)