//Função em JS é First-Class Objeto (Citizens)
//Higher-order function

//criar de forma literal:
function fun1() {};

//essa função pode receber parametros e pode retornar um valor 
//o retorno de um valor em uma função js é opcional 
//caso vc não retorne nada a função retorna undefined (então toda função retorna pelo menos o undefined)
//se vc colocar explicitamente o return ele vai retornar o que vc passou 
//o bloco no caso da função, é obrigatorio 

//Armazenando uma função numa variável:
const fun2 = function () {};          

//note que a função passada p variável é uma função anonima 
//a partir disso vc consegue referenciar essa função apartir dessa const

//Armazenar em um array:
const array = [function(a, b) { return a + b}, fun1, fun2];
//para executar essa função vc coloca:
console.log(array[0](2, 3));

//Armazenar em um atributo de objeto:
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//Passar função como parametro:
function run(fun) {
    fun()           //p invocar vc precisa passar os parênteses 
}

run(function () { console.log('Executando...') });

//Uma função pode retornar/conter uma função:
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)