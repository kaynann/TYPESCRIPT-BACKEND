var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//No TypeScript é preciso declarar o tipo de variável antes de atribuir o valor
// TIPO NUMBER
var numero = 2;
numero = 23;
// TIPO STRING
var palavra = 'Paulo';
palavra = 'casa';
// TIPO BOOLEAN
var verdade = true;
var falso = false;
falso = true;
verdade = false;
var num = [1, 3, 5, 7];
var letras = ['a', 'b', 'c'];
var misto = ['a', 1, 'c', true];
var nomes = ['João', 'Maria', 'Eduardo'];
var numerosPares = [2, 4, 6, 8, 10];
var mistoVariavel = [2, 'Paulo', false];
function minhasLetras(a, b) {
    console.log(a, b);
}
minhasLetras('p', 'a');
function soma(x, y) {
    var somar = x + y;
    return somar;
}
function coordenadas(cord) {
    console.log("A coordenada X \u00E9: ".concat(cord.x));
    console.log("A coordenada Y \u00E9: ".concat(cord.y));
}
var minhaCoordenada = { x: 329, y: 72.6 };
coordenadas(minhaCoordenada);
function mostreNumeros(a, b, c) {
    console.log("A: ".concat(a));
    console.log("B: ".concat(b));
    console.log("C: ".concat(c));
}
mostreNumeros(1, 2, 3);
mostreNumeros(4, 5);
function validaOpcao(opcao1, opcao2) {
    console.log(opcao1, opcao2);
}
validaOpcao('Paulo', true);
validaOpcao(23, 24);
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(15);
showId('15');
function showCpf(cpf) {
    console.log("O CPF \u00E9: ".concat(cpf));
}
showCpf(12345678910);
showCpf('123.456.789.-10');
function userDetails(user) {
    console.log("Nome: ".concat(user.tipo));
    console.log("Idade: ".concat(user.valor));
}
userDetails({ tipo: 'Paulo', valor: 26 });
function showCoords(myObject) {
    console.log("x = ".concat(myObject.x, ", y = ").concat(myObject.y, " e z = ").concat(myObject.z, " "));
}
var minhasCoordenadas = {
    x: 10,
    y: 15,
    z: 28,
};
showCoords(minhasCoordenadas);
function showPet(meuPet) {
    console.log(meuPet.nome);
    console.log(meuPet.raca);
    console.log(meuPet.idade);
    console.log(meuPet.peso);
}
var gatinhoDaAlice = {
    nome: 'Floki',
    peso: 4,
    raca: 'Gatinho',
    idade: 32,
    tipoRacao: 'Premier para gatos castrados'
};
showPet(gatinhoDaAlice);
// FUNÇÃO SEM RETORNO
function semRetorno() {
    console.log('Sou sem retorno');
}
;
semRetorno();
// LITERAL TYPES
var teste;
teste = 'testando';
// TYPE UNKNOW
function algumaCoisa(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
}
algumaCoisa('10');
algumaCoisa(true);
// NEVER
function showError(msgError) {
    throw new Error(msgError);
}
//showError('Deu erro aqui!')
// REST e SPREAD no JS
// • SPREAD: o objetivo do operador spread é espalhar/propagar os elementos de um array ou objeto.
var umArray = [1, 2, 3, 4, 5];
var umNovoArray = __spreadArray(__spreadArray([], umArray, true), [6, 7, 8, 9, 10], false);
console.log(umNovoArray);
// • REST: Quando o número de parâmetros que uma função receberá não é conhecido ou pode variar, podemos utilizar parâmetros rest. Em JavaScript, isso é conseguido com a variável “argumentos”. No entanto, com TypeScript, podemos usar o parâmetro rest indicado por reticências ...
function umaFunction() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
umaFunction(1, 2, 3, 4, 5, 6);
umaFunction(1, 2);
umaFunction(1);
//umaFunction('1')
// DESTRUCTURING COM PARÂMETROS DE OBJETOS
function showProdutos(_a) {
    var nome = _a.nome, preco = _a.preco;
    return "O nome do produto \u00E9: ".concat(nome, "e o pre\u00E7o dele \u00E9 ").concat(preco);
}
var camisa = {
    nome: 'Camisa de algodão',
    preco: 29.90
};
console.log(showProdutos(camisa));
// READONLY
// O prefixo readonly é usado para tornar uma propriedade somente leitura. Membros somente leitura podem ser acessados ​​fora da classe, mas seu valor não pode ser alterado.
var meuReadOnly = [['Kaynan']];
var bmw = {
    marca: 'BMW',
    modelo: 'bmw 320i'
};
//bmw.marca = 'Toyota'
console.log(bmw.marca);
function showNewUserDetails(newUser) {
    return "Seu e-mail \u00E9 ".concat(newUser.email, " sua senha \u00E9 ").concat(newUser.senha, " e sua regra de acesso \u00E9: ").concat(newUser.regra ? newUser.regra : 'SEM REGRA');
}
var user10 = {
    email: 'teste@ts.com',
    senha: '12345678',
    regra: 'gerente'
};
var user11 = {
    email: 'convidado@ts.com',
    senha: 'sem senha',
};
console.log(showNewUserDetails(user10));
console.log(showNewUserDetails(user11));
