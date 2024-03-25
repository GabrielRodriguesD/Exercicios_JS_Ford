// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).

//------------------------------------

// let cliente = valorCompra
// const pessoa = cliente
// const valorCompra = 50

// const cliente = valorCompra //tentar let

//------------------------------------------------------

// const  funcionario = valorCompra * 0.10
// const vip = valorCompra * 0.05
//--------------------------------------------------------


// const clienteValor = valorDaCompra
// const funcValor = valorDaCompra * 0.10
// const vipValor = valorDaCompra * 0.05




//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//---------------------------------------------------------------------------
//if (pessoa === cliente) {
//    console.log(`Por ser cliente, sera $${valorCompra} sem desconto. `);}
//---------------------------------------------------------------------------

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto

const valorCompras = 10
const tipoCliente = 3

    let totalComDesconto

    switch (tipoCliente) {
        case 1:
            console.log("O cliente não teve nenhum desconto. ")
            break;

        case 2:
            totalComDesconto = valorCompras * 0.10;
            console.log(`Por ser um funcionário recebeu 10% de desconto em sua compra, tendo um total de desconto de: ${totalComDesconto} reais. O total de sua compra é de: R$${valorCompras - totalComDesconto} reais`);
            break;

        case 3:
            totalComDesconto = valorCompras * 0.05;

            console.log(`Por ser Vip recebeu 5% de desconto em sua compra, tendo um total de desconto de: ${totalComDesconto} reais. O total de sua compra é de: R$${valorCompras - totalComDesconto} reais`);
            break;
    
        default:
            console.log("Opção inválida")
            break;
    }



