//Objeto é uma coleção de chave valor 
//par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
//Exemplo de objeto com chaves e valores aninhados:
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso:90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);