//Vc pode delimitar uma string por "", '', ´´ (crase, a partir da nova versão de 2015. Usado no tamplate string);
const escola = "Cod3r";

console.log(escola.charAt(4)); //Vai me dar a letra q está no índice 4 da string;
console.log(escola.charAt(5)); //Não retorna nada;
console.log(escola.charAt(3));
console.log(escola.charCodeAt(3)); //código relacionado a tabela unicode;
console.log(escola.indexOf('3'));//retorna o índice associado ao número 3 na string;
console.log(escola.substring(1));//vai imprimir a string apartir do índice 1;
console.log(escola.substring(0, 3)); //Aqui ele vai do índice 0 até o 3 sem incluir o 3;
console.log('Escola '.concat(escola).concat('!')); //vai concatenar e retonar a string;
console.log(escola.replace(3, 'e'));//pega o elemento do índice indicado e troca pelo elemento fornecido;
console.log("Ana,Maria,Pedro".split(','));//retorna um array de string;

/*O Unicode fornece um único conjunto de caracteres contendo os idiomas de todo o mundo 
e um número pequeno de formatos e esquemas de codificação conhecidos da máquina 
para adequar as necessidades de aplicativos e protocolos existentes. */