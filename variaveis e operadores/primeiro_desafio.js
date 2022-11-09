// Faça um programa para calcular o valor de umA viagem.

// Voce tera 3 variáveis. Sendo elas:
// 1 - Preço do combustivel;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distancia em KM da viagem;

// Imprima no console o valor que será gasto de combustível para realizar a vaigem.

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

const valorTotal = litrosConsumidos *  precoCombustivel;

console.log(`O valor que será gasto de combustível será de R$${valorTotal.toFixed('2')}`);



