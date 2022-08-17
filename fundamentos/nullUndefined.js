/*É importante ter em mente os tipos de atribuições - por valor e por referência;*/

const a = {name: 'Teste'}; //criando um objeto

console.log(a); //vai retornar o objeto com atributo name e o texto(valor) associado a ele;

const b = a; //aqui estou pegando o valor do objeto "a" e atribuindo ele a "b";
/*Na verdade a variável 'a' não tem o conteúdo do objeto, o q ela tem é o endereço no qual o objeto está localizado na memoria;
Ou seja, o endereço apontando para o objeto, quando eu faço a nova atribuição b = a, o que estou recebendo no b é o mesmo endereço no qual o "a" aponta;
Então a const 'a' e const 'b' apontam para o mesmo lugar na memória;
*/
//Se eu fizer:
b.name = 'Opa';
console.log(b);
console.log(a);
//As duas constants vai mudar o valor de nome p Opa, porq os dois apontam para o mesmo local de memória;

//Já no próximo exemplo(note q são tipos primitivos):
let c = 3;//declarei uma variável;
let d = c;//fazendo com q outra variável receba o valor da variável c; (uma cópia por valor)
d++
console.log(d); //valor de 'd' é diferente do valor de 'c'
console.log(c);


//--------- Trabalhando com conceito de null, já com a referência de apontar p o endereço de memória;

let valor // variável não inicializada
console.log(valor); //será undefined porq n atribui nenhum valor p essa variável 

valor = null; //null significa que se vc tem uma variável ela não está apontando p nenhum endereço de memória e nenhum valor dentro dela;
//null quer dizer - ausência de valor;
console.log(valor);
//Aqui eu inicializei mas estou dizendo q ela n aponta p nenhum lugar da memória e está vazia;


const produto = {};
console.log(produto.preco);
console.log("sem preço definido",produto);

produto.preco = 3.50;
console.log("com preço definido",produto);

produto.preco = undefined; //evite atribuir de forma explicita o undefined, deixar a própria linguagem fazer; 
//console.log(!!produto.preco); //convertendo p boolean, como é undefined vai dar falso;
//delete produto.preco;
console.log(produto);

produto.preco = null; //este produto está sem preço
console.log(!!produto.preco);  
console.log(produto);