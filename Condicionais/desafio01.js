// Faça um programa para calcular o valor de uma viagem.

// Voce tera 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gatsto médio de combustível do carro por KM;
// 5 - Distancia em KM da viagem;

// Imprima no console o valor que será gasto para realizar a vaige
precoCom = 3.92
const precoEtanol = 3.92
const precoGasolina = 4.82
const gastoKmRodado = 10
const distanciaDaViagemEmKm = 2589

let precoCombustivel = precoCom
const litrosConsumidos = distanciaDaViagemEmKm / gastoKmRodado

const valorTotalEtanol = litrosConsumidos * precoEtanol

const valorTotalGasolina = litrosConsumidos * precoGasolina

if(precoCombustivel === 3.92 ){
    console.log(`Abastecendo de Etanol, será gasto no total de R$${valorTotalEtanol.toFixed(2)} `)
} else{
    console.log(`Abastecendo de Gasolina, será gasto no total de R$${valorTotalGasolina.toFixed(2)} `)
}
