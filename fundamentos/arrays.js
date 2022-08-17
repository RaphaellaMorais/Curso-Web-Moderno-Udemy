/*Array é um vetor, uma estrutura unidirecional, 
consegue agrupar multiplos valores de uma forma linear
a partir de um único identificador,
é uma estrutura indexada, vc acessa os elementos de um array a partir de um número
vc tem o primeiro elemento a partir do índice 0, o segundo a partir do índice 1...
Array é dinâmico, cresce e diminiu, é de estrutura eterogênia - pode misturar dados(embora não seja uma boa prática) */

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);//undefided / não existe;

valores[4] = 10; //forma de acessar apartir do índice;
console.log(valores);//imprimindo com o valor 10;
console.log("Quantidade de elementos no meu array: ",valores.length);

valores.push({id: 3}, false, null, 'teste');//ex. de que vc pode misturar coisas dentro de um array; método push empurrando coisas p dentro do array;
console.log("Exemplo misturando valores no array", valores);

//Retirando elementos do array
console.log(valores.pop());//método pop p retirar o último elemento;
delete valores[0]; //excluir/retirar um atributo de dentro do objeto;
console.log(valores);

console.log(typeof valores); //p verificar o tipo do array, que é do tipo object;



//-------------------------Praticando 
console.log("======================================")

var frutas = ['Maçã', 'Banana', 'Melancia', 'Caju', 'Goiaba'];

console.log(frutas.length);

//Acessando um item do array:

var segundaFruta = frutas[1];

var ultimaFruta = frutas[frutas.length - 1]; //length-propriedade retorna o número de unidades de código presentes

console.log(segundaFruta, ultimaFruta);

//Interar um array 

frutas.forEach(function (item, indice) {
    console.log(item,"-",indice);
});

//Adicionar um item ao final do array:

var adicionar = frutas.push('Laranja');
console.log(frutas);

//Remover um item do final do array:

var ultimo = frutas.pop();
console.log(frutas);

//Remover do início do array
var primeiro = frutas.shift();
console.log(frutas);

//Adicionar ao início do array:
var adicionar = frutas.unshift('Morango')
console.log(frutas);

//Procurar o índice de um item na array:
var procurarFruta = frutas.indexOf('Banana');
console.log(procurarFruta);

//Remover um item pela posição do índice:
var removerItem = frutas.splice(procurarFruta, 1);
console.log(frutas);


//Remover itens de uma posição de índice:
console.log("Remover itens de uma posição de índice:");

var materiais = ['lapis', 'caneta', 'caderno', 'borracha'];
console.log(materiais);

var posicao = 1, quantidade = 2;

var itensRemovidos = materiais.splice(posicao, quantidade);

console.log(materiais);
console.log(itensRemovidos);

//Copiar um array:
console.log('Copiar um array:')
var copiarArray = frutas.slice();
console.log(copiarArray);