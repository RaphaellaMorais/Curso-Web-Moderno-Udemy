const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() { //colocou uma função anonima
        console.log(i)      //uso do método push p adicionar um novo elemento no array
    })
}

funcs[2]();
funcs[6]();
funcs[8]();

//aqui pelo fato da variável ser let e let ter o escopo de bloco, 
//no momento em que a função foi definida ele vai lembrar qual era o valor de ir no primeiro momento; 