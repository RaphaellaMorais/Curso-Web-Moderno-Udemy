function idadeDias (idade, operacao, operacao2){
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear()
    const anoIdade = idade;
    operacao = ano - anoIdade;
    operacao2 = anoIdade * 365;
    console.log("Você nasceu em " + operacao + " sua idade em dias é " + operacao2);
}

idadeDias(25) 