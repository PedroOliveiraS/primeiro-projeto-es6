"use strict";

// Arrows Functions
var array = [1, 3, 4, 5, 8, 9];
var novoArray = array.map(function (item) {
  return item * 2;
});
/*

    1. Remove a keyword function
    2. Colocar a flecha => entre o parentese e a chave
    3. A função recebe parâmetro?
        Sim
            3.1 Remove o parentese por volta do parametro
            .2 A função retorna apenas uma informação? (1 linha retorno)


*/
//Reduce

var soma = array.reduce(function (total, proximoValor) {
  return total + proximoValor;
});

var teste = function teste() {
  console.log('Oi'); // NÃO É RECOMENDADO
};

var teste2 = function teste2() {
  return [1, 2, 3];
}; // RETORNA UM ARRAY


var teste3 = function teste3() {
  return {
    nome: 'Joao das Neves',
    idade: 10
  };
};
