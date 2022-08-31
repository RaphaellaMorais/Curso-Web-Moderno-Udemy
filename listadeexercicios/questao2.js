/*02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function triangulo (comprimento1, comprimento2, comprimento3) {
    if (comprimento1 == comprimento2 && comprimento2 == comprimento3){
        console.log("Equilátero!")
    } else if (comprimento1 === comprimento2 || comprimento1 === comprimento3 || comprimento2 === comprimento3){
        console.log("Isósceles!")
    } else if (comprimento1 != comprimento2 && comprimento2 != comprimento3){
        console.log("Escaleno!")
    }
}

triangulo(5, 5, 5);

triangulo(5, 5, 4);

triangulo(3, 2, 6);