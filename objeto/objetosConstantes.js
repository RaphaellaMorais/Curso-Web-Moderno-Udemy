//pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} //exemplo para notarmos q acima n estamos mexendo com pessoa mas com o valor q ele guarda, aqui no exemplo daria problema pois pessoa é const e não pode ser declarado novamente;
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) //vc torna ele constante, não exclui ou atribui ou mexer nos dados do objeto;

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
console.log(pessoaConstante)