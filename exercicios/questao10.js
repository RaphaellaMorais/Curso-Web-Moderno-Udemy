function verificacaoDivisivel (numeroRecebido) {
    if(numeroRecebido % 3 === 0){
        return true
    }else{
        return false
    }
}

console.log(verificacaoDivisivel(360))
console.log(verificacaoDivisivel(17))
