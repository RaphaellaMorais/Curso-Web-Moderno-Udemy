function receberElementos (elementos) {
    let primeiro = elementos.shift()
    let ultimo = elementos.pop()
    return [primeiro, ultimo]
}

console.log(receberElementos([1, 2, 3, 4, 5]));