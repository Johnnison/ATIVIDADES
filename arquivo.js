
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
console.log(lista[2]);

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
    c = a * b;
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

function minhaFuncao() {

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


//QUESTÃO 12: Crie um programa que receba o seguinte array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e
//imprime um novo array apenas com os números pares. Dicas:
//a. ler array pode ser feito de forma fácil com forEach, mas isso pode ser
//feito com for também.
//b. exemplo de saída esperada:
//i. [2, 4, 6, 8, 10]

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];

numeros.forEach(numero => {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    }
});

console.log(numerosPares);

// foi exibido no console a sequencia de saída 2, 4, 6, 8, 10.


let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let NumerosPares = [];

for (let i = 0; i < Numeros.length; i++) {
    if (Numeros[i] % 2 === 0) {
        NumerosPares.push(Numeros[i]);
    }
}

console.log(NumerosPares);


// foi exibido no console a sequencia de saída 2, 4, 6, 8, 10.


//QUESTÃO 13: Crie um programa que:
//13.Crie um programa que:
//a. Tenha uma função que recebe 3 parâmetros (notas) e retorne a média;
//b. Avalie a média recebida e exibe a média junto com a situação no
//console de acordo com as regras abaixo:
//i. 7 ou maior = aprovado;
//ii. 5 a 7 = recuperação;
//iii. menor que 5 = reprovado.
//c. exemplo de saída esperada:
//i. “Média 8.5, resultado: Aprovado”.
//d. Faça o fluxograma.



function calcularMedia(nota1, nota2, nota3) {

    let media = (nota1 + nota2 + nota3) / 3;
    let situacao;


    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }


    return `Média ${media.toFixed(1)}, resultado: ${situacao}`;
}


let resultado = calcularMedia(8, 7, 9);
console.log(resultado); // Saída esperada: "Média 8.0, resultado: Aprovado"

// ---------------------------------------//
//FLUXOGRAMA                               

//INICIO: E: nota1, nota2, nota3

//em seguida

//C: média = (nota1 + nota2 + nota3) /3 

//em seguida

//D: se media >= 7

//em seguida

// s: "APROVADO"

// em seguida

// D: else if, media >= 5

//s: "RECUPERAÇÃO"

//em seguida

//D: else

//em seguida

//s: "REPROVADO"

//em seguida

//FINAL

//---------------------------------------//


//QUESTÃO 14:Crie um programa que calcule o IMC e exiba na tela junto com a situação. O
//Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
//peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
//indivíduo dentro de certas faixas. O IMC é calculado pela expressão
//peso/altura2 (peso dividido pelo quadrado da altura)

//a. abaixo de 18.5: Abaixo do peso
//b. entre 18.5 e 25: Peso ideal
//c. entre 25 e 30: Sobrepeso
//d. entre 30 e 40: Obesidade
//e. acima de 40: Obesidade mórbida
//f. exemplo de saída esperada:
//i. “Seu IMC é 23, resultado: Peso Ideal”

// Função para calcular IMC e exibir situação
function calcularIMC(peso, altura) {
    // Calcular IMC
    let imc = peso / (altura * altura);
    let situacao;

    // Determinar a situação com base no IMC calculado
    if (imc < 18.5) {
        situacao = "Abaixo do peso";
    } else if (imc >= 35.90 && imc < 58) {
        situacao = "Peso ideal";
    } else if (imc >= 60 && imc < 80) {
        situacao = "Sobrepeso";
    } else if (imc >= 90 && imc < 180) {
        situacao = "Obesidade";
    } else {
        situacao = "Obesidade mórbida";
    }

    // Exibir resultado no console
    console.log(`Seu IMC é ${imc.toFixed(1)}, resultado: ${situacao}`);
}

// Exemplo de uso:
calcularIMC(50, 1.75);


//QUESTÃO 15: 15.Escreva um programa que leia um número qualquer e mostre a tabuada
//desse número, usando a estrutura “for”.
//a. exemplo de saída para a entrada de número 8:
//i. 8 x 1 = 8
//ii. 8 x 2 = 16
//iii. 8 x 3 = 24
//iv. ...
//v. 8 x 10 = 80
//b. Faça o fluxograma.


function mostrarTabuada(numero) {

    for (let i = 1; i <= 10; i++) {

        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


let numero = 8;
mostrarTabuada(numero);

//--------------------------------------------------------------------------
//FLUXOGRAMA:

// INICIO
// em seguida
// LER NUMERO
// em seguida
//INICIALIZAR i = 1
// em seguida
// MULTIPLICAR NUMERO POR i
// em seguida
// EXIBIR RESULTADO
// em seguida
// INCREMENTAR i
// em seguida
// [i <= 10?] -- Sim --> [Voltar para "Multiplicar número por i"]
// Se i for maior que 10, o loop termina.
// FINAL
//--------------------------------------------------------------------------

// QUESTÃO 16: Interprete o diagrama a seguir e crie seu código

function calcularDivisao(n1, n2) {
    if (n2 === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    console.log(`O resultado de ${n1} / ${n2} é ${n1 / n2}`);
}


try {
    let n1 = 10; // Altere para testar
    let n2 = 0;  // Altere para testar
    calcularDivisao(n1, n2);
} catch (error) {
    console.error(error.message);
}























