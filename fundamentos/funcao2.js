//-----Armazenando uma funcao em uma variavel 
const imprimirSoma = function(a, b) { //pode fazer a função sem nome
    console.log(a + b)
}

imprimirSoma(2, 3); //é parecido com o exemplo da aula passada, porém com a função dentro da variável;

//-----Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3));

//-----retorno implícito 
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);

imprimir2('Legal!!!')

