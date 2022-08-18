console.log(Math.ceil(6.1)); //arredonda o valor
//Math é um objeto, uso a notação ponto p acessar uma função definida desse objeto;
const obj1 = {};
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola2'; //outra forma p criar ou acessar um atributo
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome; //this.nome - significa: O nome associado ao objeto que for criado apartir dessa função, vc vai receber o atributo nome por parametro e vai atribuir a this.nome e esse nome ficará visível p quem criar/instanciar um objeto do tipo Obj;
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new  Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();

/*Vc consegue a partir do this. usando a notação ponto criar tanto atributos como funções,
que serão expostos p fora dessa sua função quando ela for instanciada,
usa notação ponto para acessar atributos que estão visíveis dentro de um determinado objeto,
seja usando a partir da notação literal, seja apartir de uma função,
ou de um objeto da própria API do Js,
a própria função console que usamos muito 
*/