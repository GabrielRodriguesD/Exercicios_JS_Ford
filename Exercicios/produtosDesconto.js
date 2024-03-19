// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o
// preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o
// desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:



// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// Dica: utilize if / else if / else

const descriçãoProduto = "batata(s)"
const quantidadeProduto = 5 //botar quantidade nos if else
const precoUntitario = 4

//entrada de dados
// = criar variável para receber o nome do produto 
// = perguntar ao usuário qual vai ser a quantidade de produtos
// = perguntar o preço unitário do produto
const total = quantidadeProduto * precoUntitario
// const desconto = 0.05 * total
// const totalPagar = total - desconto
const desconto1 = 0.02 * total
const desconto2 = 0.03 * total
const desconto3 = 0.05 * total


if (quantidadeProduto <= 5) {
    const totalPagar = total - desconto1
    console.log(`Na compra de ${quantidadeProduto} ${descriçãoProduto} seria cobrado o valor de $ ${total}`),
    console.log(`Sendo descontado $ ${desconto1.toFixed(2)} (2%) do valor total ficou $ ${totalPagar}`)
}
else if (quantidadeProduto > 5 && quantidadeProduto <= 10) {
    const totalPagar = total - desconto2
    console.log(`Na compra de ${quantidadeProduto} ${descriçãoProduto} seria cobrado Preço total de $ ${total}`),
   console.log(`Sendo descontado $ ${desconto2.toFixed(2)} (3%) do valor total ficou $ ${totalPagar}`) 
    
}
else if (quantidadeProduto > 10) {
    const totalPagar = total - desconto3
    console.log(`Na compra de ${quantidadeProduto} ${descriçãoProduto} seria cobrado o valor de $ ${total}`),
    console.log(`Sendo descontado $ ${desconto3.toFixed(2)} (5%) do valor total ficou $ ${totalPagar}`) 
  





    // console.log(`Na compra de um(a) ${descriçãoProduto} foi cobrado Preço total de $ ${total}, mas com  desconto de 2%, $ ${desconto.toFixed(2)} preço com desconto ficou ${totalPagar}`)
    //console.log(`Desconto de 2%:${desconto}`)
   


}
//processamento de dados
// = realizar o calculo do total da quantidade do produto * valor unitário do produto 
// = realidar o calculo do desconto com base na quantidade de produtos que o usuário vai comprar

//saída de dados
// = mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
// = mostrar também o desconto de cada produto