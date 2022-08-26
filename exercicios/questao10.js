//10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.

function verificacaoDivisivel (numeroRecebido) {
    if(numeroRecebido % 3 === 0){
        return true
    }else{
        return false
    }
}

console.log(verificacaoDivisivel(360))
console.log(verificacaoDivisivel(17))
