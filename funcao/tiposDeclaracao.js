console.log(soma(3, 4));
//console.log(sub(3, 4)); //vai gerar um erro, no caso da forma de declaração de expression tem q ser antes de ser chamada;

//function declaration //aceita q seja chamada depois 
function soma(x, y) {
    return x + y
};

//function expression
const sub = function (x, y) {
    return x -y
};

console.log(sub(3, 4));

//named function expression        //forma pouco utilizada
const mult = function mult(x, y) {
    return x * y
};

console.log(mult(3, 4));