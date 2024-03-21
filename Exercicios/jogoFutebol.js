// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.




//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo


//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol

const time1 = "palmeiras"
const time2 = "santos"
const placarTime1 = 1
const placarTime2 = 1

if (placarTime1 > placarTime2) {
    console.log(`Com um placar de ${placarTime1} x ${placarTime2} o time do ${time1} Ganhou a partida!`);
} else if (placarTime2 > placarTime1) {
    console.log(`Com um placar de ${placarTime2} x ${placarTime1} o time do ${time2} Ganhou a partida!`);   
} else {
    console.log(`Com um placar de ${placarTime2} x ${placarTime1} a partida acabou em empate!`);   

}

//Adendos João

const placar = "3x2";
const [golsTime1, golsTime2] = placar.split("x");

console.log(`COR - ${golsTime1} x ${golsTime2} - PAL`);

// não tem a ver com o futebol, é só outro exemplo
const [nome, sobrenome] = ""



