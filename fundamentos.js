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
