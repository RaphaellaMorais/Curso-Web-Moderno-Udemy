const [a] = [10]; //aqui estou numa posição q n faz sentido definir um array literal; 
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota);

//Destructuring no ponto de vista de objeto, usa a sintaxe das {} chaves
//porq ele ta desestruturando de um objeto,
//quando esta desestruturando de uma array ele usa [],
//e vc só tem q entender em que momento do código vc esta fazendo uma coisa p saber se vc está criando um array (lado direito da operação),
// ou se vc está usando o operador de desestruturação (lado esquerdo da operação);
  