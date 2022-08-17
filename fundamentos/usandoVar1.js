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
console.log("Fora do escopo",sera);

//Escopo é onde aquela variável é visível, até onde aquela variável é acessível; 


function teste() { //aqui tbm é um bloco. 
    var local = 123  //bloco especial q está acossiada a uma função;
    console.log("Dentro do escopo", local);
}

teste()
console.log(local); //vai dar erro, porq quando vc define uma variável dentro de uma função, o escopo desse variável é apenas dentro da função;

//Variáveis definidas com a palavra reservada Var tem escopo global e escopo de função


//Quando tratando de Var só tem dois escopos possiveis, ou é de nível global (ou seja visivel na aplicação inteira), 
//ou criar uma Var no escopo de função(só será visivel dentro da function);


/*Escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.
Em outras palavras, o que determina quais são os dados que podem ser acessados em uma determinada parte do código é o escopo. */





