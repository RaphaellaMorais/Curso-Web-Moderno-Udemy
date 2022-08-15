//Objetos vai ser tratado mais afundo posteriormente; 
//Vamos ver alguns exemplos mais básicos p ter noção;

//JSON (javascript object notation ) um objeto em js não é a mesma coisa q json;
//Json é um formato textual, será tratado mais no futuro;

//Em js vc pode criar um obejto e definir como esse objeto é, os atributos, comportamentos, funções dele, dinâmicamente;
//Obejeto em js é sempre uma coleção de chaves e valores, vc tem o nome do atributo e passo um valor p ele, que pode ser texto, numero, boolean, pode ser uma função ;
//Vc pode ter um objeto dentro de outro objeto;

const prod1 = {}; // um par de chaves representa um objeto;
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; //evitar atributos com espaço;

console.log(prod1);

//No exemplo: criei um objeto vazio, e logo depois estou dizendo q dentro desse objeto eu vou ter uma chave(chama cheve porq vc só pode ter um identificador unico dentro de um objeto), um identificador chamado nome, e o valor dele será "Celular Ultra Mega";

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
};

console.log(prod2);