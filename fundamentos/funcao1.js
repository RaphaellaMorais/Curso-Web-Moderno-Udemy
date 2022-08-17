//-----Função sem retorno

function imprimirSoma(a, b) { //function (palavra reservada p definir uma função), nome da função, parâmetros,
    console.log(a + b) // não retorna nada como resposta
}

imprimirSoma(2, 3); //aqui passa os valores dos parâmetros,
imprimirSoma(2); //pode passar só um, que o segundo valor vai ser undefined;
imprimirSoma(2, 10, 4, 5, 6, 7, 8); //ele vai pegar os dois primeiros e o resto vai ignorar;
imprimirSoma(); //vai dar um NaN

//------Funcao com retorno 
function soma(a, b = 1) {
    return a + b //diferente da primeira, aqui eu estou retornando um valor na chamada dessa função;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());

