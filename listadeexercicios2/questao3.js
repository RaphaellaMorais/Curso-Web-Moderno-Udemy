function calcularSalario (horas, valorHora){
    const calculando = valorHora * horas;
    console.log(`Salário igual a R$ ${parseFloat(calculando).toFixed(2).replace('.', ',')}` )
}

calcularSalario(150, 40.5)