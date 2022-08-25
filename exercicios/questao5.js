function mostrarDinheiro (valor) {
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}

console.log(mostrarDinheiro(0.30000000000000004));




