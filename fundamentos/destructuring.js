//É um operador de desestruturação, tira da estrutura;

const pessoa  = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const { nome, idade } = pessoa; //aqui as chaves {} representa o operador de desestruturação; Não é p criar objeto;
console.log(nome, idade);     //aqui ele está dizendo - tire de dentro do objeto o atributo nome e idade;

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

/*const { endereco: { logradouro, numero, cep} } = pessoa; //ele não vai criar uma variável endereço, ele vai criar apenas logradouro, numero, cep, vai extrair esses 3 diretamente de endereço;
console.log(logradouro, numero, cep);

const { conta: { ag, num } } = pessoa; // aqui vai dar problema, porq ta tentando acessar alguma coisa que n é um objeto;
console.log(ag, num);
*/