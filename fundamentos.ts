//No TypeScript é preciso declarar o tipo de variável antes de atribuir o valor
// TIPO NUMBER
let numero: number = 2
numero = 23

// TIPO STRING
let palavra: string = 'Paulo'
palavra = 'casa'

// TIPO BOOLEAN
let verdade: boolean = true
let falso: boolean = false

falso = true
verdade = false

let num: number[] = [1, 3, 5, 7]
let letras: string[] = ['a', 'b', 'c']
let misto: any[] = ['a', 1, 'c', true]

const nomes: Array<string> = ['João', 'Maria', 'Eduardo']
const numerosPares: Array<number> = [2, 4, 6, 8, 10]
const mistoVariavel: Array<any> = [2, 'Paulo', false]

function minhasLetras(a:string, b:string) {
    console.log(a, b)
}

minhasLetras('p', 'a')


function soma(x: number, y:number):number {
    let somar: number = x + y
    return somar
}

function coordenadas(cord: {x: number, y: number}) {
    console.log(`A coordenada X é: ${cord.x}`)
    console.log(`A coordenada Y é: ${cord.y}`)
}

const minhaCoordenada = {x: 329, y:72.6}
coordenadas(minhaCoordenada)

function mostreNumeros (a: number, b: number, c?: number) {
    console.log(`A: ${a}`)
    console.log(`B: ${b}`)
    console.log(`C: ${c }`)
}

mostreNumeros(1,2,3)
mostreNumeros(4,5)

function validaOpcao(opcao1: string | number, opcao2: number | boolean) {
    console.log(opcao1, opcao2)
}

validaOpcao('Paulo', true)
validaOpcao(23, 24)

// ALIAS
type myAlias = number | string

function showId(id: myAlias) {
    console.log(`O ID é: ${id}`)
}

showId(15)
showId('15')

function showCpf(cpf: myAlias) {
    console.log(`O CPF é: ${cpf}`)
}

showCpf(12345678910)
showCpf('123.456.789.-10')

type objectAlias = {
    tipo: string,
    valor: number
}

function userDetails(user: objectAlias) {
    console.log(`Nome: ${user.tipo}`)
    console.log(`Idade: ${user.valor}`)
}

userDetails({tipo: 'Paulo', valor: 26})

// INTERFACES
interface Coords {
    x: number,
    y: number,
    z: number,
}

function showCoords(myObject: Coords) {
    console.log(`x = ${myObject.x}, y = ${myObject.y} e z = ${ myObject.z } `)
}

let minhasCoordenadas = {
    x: 10,
    y: 15,
    z: 28,
}

showCoords(minhasCoordenadas)


// DIFERENÇA ENTRE ALIAS E INTERFACES
// type myPet = {
//     nome: string,
//     peso: number,
//     raca: string,
//     idade: number,
// }

// function showPet (meuPet: myPet) {
//     console.log(meuPet.nome)
//     console.log(meuPet.raca)
//     console.log(meuPet.idade)
//     console.log(meuPet.peso)
// }

// showPet({nome: 'Floki', peso: 4, raca: 'Gatinho', idade: 32})

// type myPet = {
//     tipoRacao: string
// }

interface myPet {
    nome: string,
    peso: number,
    raca: string,
    idade: number,
}

function showPet (meuPet: myPet) {
    console.log(meuPet.nome)
    console.log(meuPet.raca)
    console.log(meuPet.idade)
    console.log(meuPet.peso)
}

const gatinhoDaAlice = {
    nome: 'Floki', 
    peso: 4, 
    raca: 'Gatinho', 
    idade: 32,
    tipoRacao: 'Premier para gatos castrados'
}

showPet(gatinhoDaAlice)

interface myPet {
    tipoRacao: string
}

// FUNÇÃO SEM RETORNO
function semRetorno():void {
    console.log('Sou sem retorno');
};

semRetorno()

// LITERAL TYPES
let teste: 'testando'
teste = 'testando'

// TYPE UNKNOW
function algumaCoisa(x: unknown): void {
    if (Array.isArray(x)) {
        console.log(x[0])
    }
}

algumaCoisa('10')
algumaCoisa(true)

// NEVER
function showError(msgError: string): never {
    throw new Error(msgError)
}

//showError('Deu erro aqui!')

// REST e SPREAD no JS
// • SPREAD: o objetivo do operador spread é espalhar/propagar os elementos de um array ou objeto.
let umArray = [1, 2, 3, 4, 5]
let umNovoArray = [...umArray, 6, 7, 8, 9, 10]
console.log(umNovoArray)

// • REST: Quando o número de parâmetros que uma função receberá não é conhecido ou pode variar, podemos utilizar parâmetros rest. Em JavaScript, isso é conseguido com a variável “argumentos”. No entanto, com TypeScript, podemos usar o parâmetro rest indicado por reticências ...
function umaFunction(...a:number[]) {
    console.log(a)
}
umaFunction(1,2,3,4,5,6)
umaFunction(1,2)
umaFunction(1)
//umaFunction('1')


// DESTRUCTURING COM PARÂMETROS DE OBJETOS
function showProdutos({nome, preco}: {nome: string, preco: number}):string {
    return `O nome do produto é: ${ nome }e o preço dele é ${ preco }`
}

const camisa = {
    nome: 'Camisa de algodão',
    preco: 29.90
}

console.log(showProdutos(camisa))

// READONLY
// O prefixo readonly é usado para tornar uma propriedade somente leitura. Membros somente leitura podem ser acessados ​​fora da classe, mas seu valor não pode ser alterado.

const meuReadOnly: readonly string[][] = [['Kaynan']]
interface Carro {
    readonly marca: string,
    modelo: string,
}

const bmw: Carro = {
    marca: 'BMW',
    modelo: 'bmw 320i'
}

//bmw.marca = 'Toyota'
console.log(bmw.marca)

// OPCIONAL EM INTERFACES
interface NewUser {
    email: string,
    senha: string | number,
    regra?: string
}

function showNewUserDetails(newUser: NewUser): string {
    return `Seu e-mail é ${ newUser.email } sua senha é ${ newUser.senha } e sua regra de acesso é: ${ newUser.regra ? newUser.regra : 'SEM REGRA' }`
}

const user10: NewUser = {
    email: 'teste@ts.com',
    senha: '12345678',
    regra: 'gerente'
}

const user11: NewUser = {
    email: 'convidado@ts.com',
    senha: 'sem senha',
}

console.log(showNewUserDetails(user10))
console.log(showNewUserDetails(user11))