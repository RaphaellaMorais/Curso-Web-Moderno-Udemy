const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
/*Dentro de uma string acessar a variável e além disse conseiderar algumas coisas que a string não pode fazer,
por ex. não da p quebrar uma linha no meio de uma string,
Já no Template String é possível, ele considera todas as quebras de linhas,
espaços em branco, tabes que eu coloque dentro da minha string; */

const template = `
    Olá
    ${nome}!`; //aqui ele faz uma interpolação, interpretou e substituiu, isso acontece com oq vc colocar entre {};

console.log(concatenacao, template);

//expressoes ...

console.log(`1 + 1 = ${1 + 1}`);

//Exemplo: Chamando uma template String dentro de uma função;
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);

