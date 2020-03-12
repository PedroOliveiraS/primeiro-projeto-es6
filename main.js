// Arrows Functions
var array = [1, 3, 4, 5, 8, 9];

const novoArray = array.map(item => item * 2);


/*

    1. Remove a keyword function
    2. Colocar a flecha => entre o parentese e a chave
    3. A função recebe parâmetro?
        Sim
            3.1 Remove o parentese por volta do parametro
            .2 A função retorna apenas uma informação? (1 linha retorno)


*/

//Reduce

const soma = array.reduce((total, proximoValor) => total + proximoValor);

const teste = () => {
    console.log('Oi'); // NÃO É RECOMENDADO
}

const teste2 = () => [1, 2, 3]; // RETORNA UM ARRAY

const teste3 = () => ({nome: 'Joao das Neves', idade: 10});