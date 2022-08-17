//Conceito de hoisting é jogar as variáveis decladas com Var p cima;
console.log('a =', a);
var a = 2; // a variável vai ser içada
console.log('a =', a);

//Não tem motivo p fazer isso, o indicaco é que se declare as variáveis antes de usar;

//**Com let o içamento não vai ocorrer;
console.log('b =', b);
let b = 2;
console.log('b =', b);

