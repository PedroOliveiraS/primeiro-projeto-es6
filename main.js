// Declarar variáveis em ES6+
/*
    const: cria uma variável do tipo constante.

    Só poderá ser alterado o valor definido inicialmente atraveś de mutações
    (em objetos ou arrays);
*/

const nomeVariavel = "João";

// Objeto
const usuario = {nome: 'Jesus', idade: 26};
//nomeVariavel = "Maria";

// Permite a mutação do objeto  mas não sua substituição
usuario.nome = 'Maria';
// usuario = {nome: 'Maria}, idade: 26};
console.log(usuario.nome);

const meuVetor = [1, 2, 3, 4, 5];
// meuvetor = [90, 93];   // Vai dar erro
meuVetor[0] = 90;
meuVetor[2] = 93;

console.log(usuario);
console.log(meuVetor);


// Variável do tipo let
let valor = 3;
let nome = 'claudia Let';
let altura = 1.86;
let contemValor = true;


// Escopo A

if (true) {
    // Escopo B
}

function somar(){
    // Escopo C
}

for(var i = 0; i<5; i++){
    // Escopo D
    let nome = 'Maria';
}

//Escopo A


var exibirMensagem = function(){
    // Hoisting
    console.log(mensagem);
    var mensagem = 'Minha mensagem';
    console.log(mensagem);
}

exibirMensagem();

function exibirMensagem2(){
    if(true){
        let escopoFuncao = 'Teste';
        let escopoBloco = 'Teste 2a';
        console.log(escopoBloco);
    }
    console.log(escopoFuncao);
    console.log(escopoBloco)
}

exibirMensagem2();