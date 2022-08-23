//Função factory é uma função que retorna um objeto
//Tem o objeto de fabricar uma instancia de um objeto
//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());