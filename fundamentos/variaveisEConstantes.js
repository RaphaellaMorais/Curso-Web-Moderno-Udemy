var a = 3; //var (o nome da variável) recebe o valor 3;
let b = 4;

var a = 30;
//let b = 40;//não é possível redeclarar uma variável com let;
b = 40;

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
// c = 50
 console.log(c);

 /*Três palavras reservada da linguagem JS Var, Let, Const
 - para declaração de constantes e variáveis
 - Duas declaram variáveis que é Var e Let 
 - E a outra declara constante - const
 */

//Tudo que vc não tem motivo para mudar dentro do seu algoritmo, comece colocando uma constante;
//Caso eu precise reatribuir um valor para determinada variável, eu uso o let; 