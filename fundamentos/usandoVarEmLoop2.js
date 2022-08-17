const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]();
funcs[8]();

//vai imprimir 10 nos dois casos porq a Var não tem escopo de bloco
//por isso o resultado vai ser 10 p qualquer chamado q eu fizer; 
//ele n respeitou o primeiro momento que a variável foi declarada;