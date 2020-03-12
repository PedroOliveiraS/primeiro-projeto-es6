// Operações com Array em ES6+

const array = [1, 3, 4, 5, 8, 9];

const novoArray = array.map(function(item, index){
    return item * 2;
});

console.log(novoArray);