
// ATIVIDADE DE JAVA SCRIPT

//QUESTÃO 1: Crie uma variável, inicialize e exiba seu valor no console.

let = 20;
console.log(20);

// QUESTÃO 2:Crie um array de itens, itere sobre eles e os exiba no console.

let itens = ['notebook', 'computador', 'teclado'];
itens.forEach(item => {
    console.log(item);
});

// QUESTÃO 3:Como acessar o terceiro elemento da lista?

let lista = ['video game', 'bicicleta', 'bola', 'camisa'];
console.log(lista[3]); 

//QUESTÃO 4:Crie uma função que calcule a área do quadrado em metros.

function calculaAreaQuadrado(lado) {
    let area = lado * lado;
    console.log(`A área de um quadrado de lado ${lado} é ${area}m²`);
}

calculaAreaQuadrado(2);

//QUESTÃO 5:Faça um algoritmo que leia os valores de A, B, C e imprima a soma entre A e B e mostre se a soma é menor que C.

let A = 10;
let B = 6;
let C = 25;
let somar = A + B;
console.log(`A soma de A e B é ${somar}`);
if (somar < C) {
    console.log('A soma é menor que C');
} else {
    console.log('A soma não é menor que C');
}


//QUESTÃO 6:Qual a saída desse código?

var numero = "5";
var soma = numero + 10;
console.log(soma);
// A saída é 510


//QUESTÃO 7:Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B
//forem iguais, deverá somar os dois valores, caso contrário deverá multiplicar
//A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a
//uma variável C e imprimir seu valor na tela.


let a = 15;
let b = 15;
let c;
if (a === b) {
    c = a + b;
} else {
    c =a * b;
}
console.log(`O valor de c é ${c}`);

// QUESTÃO 8:O que acontece na execução do código a seguir? E se trocar a declaração da
// variável por let?

for (var contador = 0; contador < 5; contador++) {
    // alguma lógica aqui
}
console.log(contador);

// O var faz com que a variável contador exista fora do loop
//Após o loop, contador será 5
//Saída: 5

// Se usar o let faz com que a variável contador exista dentro do loop.
//Fora do loop, contador aparece que não existe.


//QUESTÃO 9: Faça um algoritmo que receba um número inteiro e imprima na tela o seu
//antecessor e o seu sucessor.

let Numero = 5;
console.log(`Antecessor: ${Numero - 1}, Sucessor: ${Numero + 1}`);



//QUESTÃO 10: Qual será a saída do seguinte código? Escreva e execute.

var x = 10;

function  minhaFuncao() {

var y = 5;
console.log(x + y);

}

minhaFuncao();

// A saída do código mostra o numero 15


//QUESTÃO 11: Qual será a saída do seguinte código? Escreva e execute.

var numero = "5";
if (numero === 5) {
    console.log("O número é igual a 5.");
} else if (numero == 5) {
    console.log("O número é igual a 5, com conversão de tipo");
} else {
    console.log("O número não é igual a 5");
}

// Mostra que o número igual a 5, com conversão de tipo












