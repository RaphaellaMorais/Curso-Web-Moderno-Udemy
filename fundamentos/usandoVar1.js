{
     {
         { 
            { 
                var sera = 'Será???' //a variável Var ficará visível para todos, inclusive os que estão fora do escopo;
                console.log(sera);
            } 
        } 
    } 
}
console.log(sera);

//escopo é onde aquela variável é visível, até onde aquela variável é acessível; 


function teste() {
    var local = 123
    console.log(local);
}

teste()
console.log(local);

//Variáveis definidas com a palavra reservada Var tem escopo global e escopo de função
