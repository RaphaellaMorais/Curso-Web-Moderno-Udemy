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