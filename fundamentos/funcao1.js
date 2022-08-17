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
console.log(soma(2)); //aqui ele vai considerar o valor que passei em b = 1
console.log(soma());

/*Funções são blocos de construção fundamentais em JavaScript. 
Uma função é um procedimento - um conjunto de instruções que executa uma tarefa ou calcula um valor. 
Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la. */


//----------------------------Praticando
console.log("======================================")

function imprimirNome(a, b) { //function (palavra reservada p definir uma função), nome da função, parâmetros,
    console.log(a + b) // não retorna nada como resposta
}

imprimirNome('Raphaella ', 'Morais');


function imprimirNome(a, b = "Morais") {
    console.log(a + b)
}

imprimirNome('Raphaella ', 'Nascimento');
imprimirNome('Raphaella ');