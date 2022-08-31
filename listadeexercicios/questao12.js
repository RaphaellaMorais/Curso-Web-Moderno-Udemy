/*let n = 0;
let numero = 0;

while (numero < numero) {
    n++,
    numero * n
    
};

console.log(numero(10)); */

//-----Olhei resposta:

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))