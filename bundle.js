"use strict";

// Template Literals
var fullName = 'Uchuha Sasuke';
var age = 12; // "Meu nome é Uchuha Sasuke, o último de meu nome. E tenho 12 anos."

console.log('Meu nome é ' + fullName + ', o último de meu nome. E tenho ' + age + 'anos.');
console.log("Meu nome \xE9 ".concat(fullName, ". E tenho ").concat(age, " anos"));
var mensagem = "Meu nome \xE9 ".concat(fullName, ". E tenho ").concat(age, " anos");
console.log(mensagem);
