// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

    // let nomes = ["Gabriel", "Jessica", "Jenifer", "Juliana", "Julia", "Arthur", "Levi", "Fernanda", "Lilliane", "Adeline"]


function buscarNome(){
    let nomes = [];

    for (let i = 0; i < 10; i++){

        nomes[i] = window.prompt("Digite um nome");
        //nomes.push(window.prompt("Digite um nome"))
    }


    const nomeBuscado = prompt("Digite o nome que deseja buscar")

    //if (nomes.includes(nomeBuscado))
    if (nomes.indexOf(nomeBuscado) >= 0) {

        window.alert("ACHEI")
    }else {

        window.alert("UÈ CADE, N ACHEI")
        //nomes.indexof(nomeBuscado) retorna -1 se for falso
    }



}


// }

// console.log(nomes);


// for (){
//     if (nomeBuscado === nomes[i]){

//     }
//     else{

//     }
// }

//     const nome1 = "Gabriel"
//     const nome2 = "Jessica"
//     const nome3 = "Jenifer"
//     const nome4 = "Juliana"
//     const nome5 = "Julia"
//     const nome6 = "Arthur"
//     const nome7 = "Levi"
//     const nome8 = "Fernanda"
//     const nome9 = "Lilliane"
//     const nome10 = "Adeline"

// if (nomeBusca == nome1 || nomeBusca == nome2 || nomeBusca == nome3 || nomeBusca == nome4 || nomeBusca == nome5 || nomeBusca == nome6 || nomeBusca == nome7 || nomeBusca == nome8 || nomeBusca == nome9 || nomeBusca == nome10) {
//     console.log(`ACHOU!! ${nomeBusca} esta na lista`);
// }

// else  {
//     console.log(`UÉ CADE?!! ${nomeBusca} não encontrado`);
// }