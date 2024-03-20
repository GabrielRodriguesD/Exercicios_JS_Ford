// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

const nomeBusca = "Gabriel"

const nome1 = "Gabriel"
const nome2 = "Jessica"
const nome3 = "Jenifer"
const nome4 = "Juliana"
const nome5 = "Julia"
const nome6 = "Arthur"
const nome7 = "Levi"
const nome8 = "Fernanda"
const nome9 = "Lilliane"
const nome10 = "Adeline"

if (nomeBusca == nome1 || nomeBusca == nome2 || nomeBusca == nome3 || nomeBusca == nome4 || nomeBusca == nome5 || nomeBusca == nome6 || nomeBusca == nome7 || nomeBusca == nome8 || nomeBusca == nome9 || nomeBusca == nome10) {
    console.log(`ACHOU!! ${nomeBusca} esta na lista`);
}

else  {
    console.log(`UÉ CADE?!! ${nomeBusca} não encontrado`);
}
