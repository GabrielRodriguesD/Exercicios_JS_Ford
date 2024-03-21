// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console

// console.log("teste");

const lado1 = 60;
const lado2 = 50;
const lado3 = 40;

// console.log(trianguloIsoscele);

// const triangulo = 40 && 30 && 50

// console.log(triangulo);
if (lado1 && lado2 == lado3) {
    console.log(`Possui 3 lados iguais, é um Triângulo Equilátero`);
} else if (lado1 == lado2 && lado2 != lado3) {
    console.log(`Possui 2 lados iguais, é um Triângulo Isoscele`);
} else if (lado1 != lado2 && lado2 != lado3) {
    console.log(`Possui 3 lados diferentes, é um Triângulo Escaleno`);
}

// ---------------------------------------------------------------------------------
//  CORREÇÂO Guilherme


const ladoA = 90;
const ladoB = 20;
const ladoC = 40;

if (ladoA == ladoB && ladoB == ladoC) {
    console.log("O Triângulo é Equilátero pois tem as 3 medidas iguais!");
} else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
    console.log("O Triângulo é Isoscele pois tem pelo menos 2 lados iguais!");
    
} else {
    console.log("O Triângulo é Escaleno pois possui todos os lados diferentes");
}

//  CORREÇÂO Joao

// const ladoA = 90;
// const ladoB = 20;
// const ladoC = 40;

//  if (ladoA === ladoB && ladoB === ladoC) {
//     console.log("O Triângulo é Equilátero pois tem as 3 medidas iguais!");
// //simplificação de lógica
// } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
//      console.log("O Triângulo é Isoscele pois tem pelo menos 2 lados iguais!");
// // usar === por pratica, pode dar erro eventualmente
//  } else {
//     console.log("O Triângulo é Escaleno pois possui todos os lados diferentes");
//  }











