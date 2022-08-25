//26) Fazer um programa para encontrar todos os pares entre 1 e 100.

/*function pares(valor1, valor2) {
    // verifica se valor1 é par (se não for, soma 1)
    valor2 = 100;
    if (valor1 % 2 != 0) {
        valor1++; // valor1 passa a ser par
    }
    while(valor1 <= valor2){
        valor1 + 2;
        console.log(valor1);
    }
    */

function pares(valor1, valor2) {
    // verifica se valor1 é par (se não for, soma 1)
    valor2 = 100;
    if (valor1 % 2 != 0) {
        valor1++; // valor1 passa a ser par
    }
    //  garantindo que valor1 é par
    while (valor1 <= valor2) {
        console.log(valor1);
        valor1 += 2; // soma 2, assim já vai para o próximo número par
    }
}

pares(1, 100);