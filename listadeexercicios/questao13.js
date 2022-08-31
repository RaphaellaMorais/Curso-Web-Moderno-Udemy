// let diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

// switch (diaSemana) {
//     case "Domingo":
//       console.log("fim de semana");
     
//     case "Segunda":
//         console.log("dia útil");
     
//     case "Terça":
//         console.log("");
      
//     case "Quarta":
//         console.log("");
      
//     case "Quinta":
//         console.log("");

//     case "Sexta":
//       console.log("");
      
//     default:
//       console.log("Desculpe, digite um valor válido");
//   }
  
//   console.log(diaSemana('Domingo'));


// diasDaSemana = [
//     1 = "Dom",
//     2 = "Seg",
//     3 = "Ter",
//     4 = "Qua",
//     5 = "Qui",
//     6 = "Sex",
//     7 = "Sab",
// ];

// const dias = diasDaSemana;

// switch(dias){
//   case  1: "Dom"
//     console.log('fim de semana');
//     break;

// }

// console.log(dias(1));

//-----Olhei resposta:

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));







  
  