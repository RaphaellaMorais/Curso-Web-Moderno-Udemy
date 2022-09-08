// setTimeout(function() {
//     console.log('Executando callback...')

//     setTimeout(function(){
//         console.log('Executando callback...')

//         setTimeout(function() {
//             console.log('Executando callback...')
//         }, 2000)
//     }, 2000)
// }, 2000)


//faz a mesma coisa:
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)

//O método global setTimeout() define um cronômetro que executa uma função ou trecho de código especificado assim que o cronômetro expirar.
