class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

/*como funciona a herança em classe - Mecanismo é sempre o mesmo
sempre em cima de função, herança funciona em cima de prototype
 */

/*classe só é uma forma diferente de escrever uma função, a herança continua 
sendo via prototype */