console.log(typeof Object);// aqui se trata de uma função;
console.log(typeof new Object()); //instanciando uma função, agora eu tenho um objeto criado apartir de uma função; 

//Exemplo do mesmo efeito de cima:

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} //ES 2015 (ES6) //classe é um detalhe de sintaxe mas internamente ele criou uma função;
console.log(typeof Produto);
console.log(typeof new Produto());
