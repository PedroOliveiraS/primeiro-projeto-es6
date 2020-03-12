"use strict";

// Operações com Array em ES6+
var array = [1, 3, 4, 5, 8, 9];

// Percorre todos os itens do vetor eexcecuta em determinada ação para ele com retorno
var novoArray = array.map(function (item, index) {
  return item * 2;
});

console.log('arraymap: '+ novoArray);

// Reduce: Consumir tod oo vetor e transformar em uma única informação
const soma = array.reduce(function (total, proximoValor){
    return total + proximoValor;
});

console.log('arrayReduce: '+ soma);

/*
    Execução:
    total: 0 proximo: 1
    total: 1 proximo: 3
    total: 4 proximo: 4

*/

// Filter: filtrar somente os itens que queremos
const filterPares = array.filter(function (item){
    /*if(item % 2 == 0){
        return true;
    }else{
        return false;
    }*/

    return item % 2 === 0;
});

console.log('filterPares:' + filterPares);

const usuarios = [
    { nome: 'Usuário 1', idade: 10},
    { nome: 'Usuário 2', idade: 15},
    { nome: 'Usuário 3', idade: 18},
];

const novosUsuarios = usuarios.filter(function usuario(){
    return usuarios.idade >=15;
})


//Find
const find = usuarios.find(function (item){
    return item.nome === 'Usuário 1';
});

if(find){
    console.log(find);
}


//forEach
usuarios.forEach(function (item, index) {
   console.log(item); 
});