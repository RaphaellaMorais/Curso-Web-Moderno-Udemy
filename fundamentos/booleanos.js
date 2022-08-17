let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log();

//seu eu passar para o console apenas o isAtivo, ele vai imprimir um número;
//Como faço para transformar um valor para verdadeiro ou falso?
//Pode usar a negação "!";
//Se vc tem um valor verdadeiro e coloca uma negação na frente aquele valor vira não verdadeiro, ou seja falso;
//Se vc coloca duas negações, significa que vc volta para o valor original, no caso aqui verdadeiro;

console.log(!!isAtivo);

console.log('os verdadeiros...'); //todos aqui resolvem para verdadeiro;
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...'); //todos aqui resolvem para falso;
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' '));

let nome = 'Lucas';
console.log(nome || 'Desconhecido'); //aqui seria algo como: caso isso não esteja valido imprima o 'Desconhecido';
