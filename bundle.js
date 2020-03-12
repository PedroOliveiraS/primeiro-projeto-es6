"use strict";

// Declarar variáveis em ES6+

/*
    const: cria uma variável do tipo constante.

    Só poderá ser alterado o valor definido inicialmente atraveś de mutações
    (em objetos ou arrays);
*/
var nomeVariavel = "João"; // Objeto

var usuario = {
  nome: 'Jesus',
  idade: 26
}; //nomeVariavel = "Maria";
// Permite a mutação do objeto  mas não sua substituição

usuario.nome = 'Maria'; // usuario = {nome: 'Maria}, idade: 26};

console.log(usuario.nome);
var meuVetor = [1, 2, 3, 4, 5]; // meuvetor = [90, 93];   // Vai dar erro

meuVetor[0] = 90;
meuVetor[2] = 93;
console.log(usuario);
console.log(meuVetor); // Variável do tipo let

var valor = 3;
var nome = 'claudia Let';
var altura = 1.86;
var contemValor = true; // Escopo A

if (true) {// Escopo B
}

function somar() {// Escopo C
}

for (var i = 0; i < 5; i++) {
  // Escopo D
  var _nome = 'Maria';
} //Escopo A


var exibirMensagem = function exibirMensagem() {
  // Hoisting
  console.log(mensagem);
  var mensagem = 'Minha mensagem';
  console.log(mensagem);
};

exibirMensagem();

function exibirMensagem2() {
  if (true) {
    var _escopoFuncao = 'Teste';
    var _escopoBloco = 'Teste 2';
    console.log(_escopoBloco);
  }

  console.log(escopoFuncao);
  console.log(escopoBloco);
}

exibirMensagem2();
