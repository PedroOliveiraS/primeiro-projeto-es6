"use strict";

var usuario = {
  nome: 'Jordan',
  idade: 24,
  endereco: {
    cidade: 'Ituiutaba',
    estado: 'MG'
  }
};
/*
console.log(usuario);

let nome = usuario.nome;
let idade = usuario.idade;
let cidade = usuario.endereco.cidade;

console.log(nome, idade, cidade);
*/

var nome = usuario.nome,
    _usuario$idade = usuario.idade,
    idade = _usuario$idade === void 0 ? 0 : _usuario$idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);
/*
function mostrarNome(nome){
    console.log(nome);
}

mostrarNome(usuario.nome);
*/

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrarNome(usuario);
