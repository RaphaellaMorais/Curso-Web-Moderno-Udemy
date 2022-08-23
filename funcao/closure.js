//Ele é o excopo criado quando vc define a sua função 
//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular as variáveis externas à função;
//E essas variáveis externas tem tudo a ver com o contexto lexico(contexto no qual a função foi declarada) 

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());