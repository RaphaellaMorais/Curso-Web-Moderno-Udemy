const peso1 = 1.0; //aqui ele é considerado inteiro mesmo sendo um número "quebrado";
const peso2 = Number('2.0'); //Number aqui é uma função;

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)); //O toFixed não altera o valor de media, ele apenas olha o valor de media e aplica uma função;
console.log(media.toString(2)); //retorna uma string ou acrescentando o 2 transforma em binário;
console.log(typeof media);
console.log(typeof Number);
