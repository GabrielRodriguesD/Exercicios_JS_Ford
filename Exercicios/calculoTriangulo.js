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

const lado1 = 60 
const lado2 = 60 
const lado3 = 60 

// console.log(trianguloIsoscele);

// const triangulo = 40 && 30 && 50

// console.log(triangulo);
if (lado1 && lado2 == lado3) {
    console.log(`Possui 3 lados iguais, é um Triângulo Equilátero`);
} else if (lado1 == 60 && lado2 == 40 && lado3 == 60) {
    console.log(`Possui 2 lados iguais, é um Triângulo Isoscele`);
} else if (lado1 == 60 && lado2 == 40 && lado3 == 50) {
    console.log(`Possui 3 lados diferentes, é um Triângulo Escaleno`);
}


// if (lado1 == 60 && lado2 == 60 && lado3 == 60) {
//     console.log(`Possui 3 lados iguais, é um Triângulo Equilátero`);
// } else if (lado1 == 60 && lado2 == 40 && lado3 == 60) {
//     console.log(`Possui 2 lados iguais, é um Triângulo Isoscele`);
// } else if (lado1 == 60 && lado2 == 40 && lado3 == 50) {
//     console.log(`Possui 3 lados diferentes, é um Triângulo Escaleno`);
// }











