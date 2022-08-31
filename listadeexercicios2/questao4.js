/*function mes (meses, numero){
    meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"];
        switch(numero){
            case 1: 
        }
    console.log(meses)
}

meses();*/


//olhei resposta:

const meses = [
{
    id: 1,
    name: 'janeiro'
},
{
    id: 2,
    name: 'fevereiro'
}
]

function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
}

console.log(receberNomeDoMes(2))

function receberNomeDoMes(numero) {
    switch(numero){
    case 1:
    return "janeiro";
    case 2:
    return "fevereiro";
    case 3:
    return "março";
    case 4:
    return "abril";
    case 5:
    return "maio";
    case 6:
    return "junho";
    case 7:
    return "julho";
    case 8:
    return "agosto";
    case 9:
    return "setembro";
    case 10:
    return "outubro";
    case 11:
    return "novembro";
    case 12:
    return "dezembro";
    }
}

console.log(receberNomeDoMes(2))

