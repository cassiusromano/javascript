// 1 - Crie uma classe para representar carros. 
// Os carros possuem , uma cor e um gasto médio de combustível por KM rodado. 
// Crie um método que dado a quantidade de KM e o preço do combustível nos de o valor gasto em reias para realizar este percuso. 


class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca,cor,gastoMedioPorKm){
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm

    }

    calcularGastoDePercuso(distancia,precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel
    }

}

const uno = new Carro('Fiat', 'Prata', 1/12 )
console.log(uno.calcularGastoDePercuso(70,5))

const palio = new Carro('Fiat', 'Preto', 1/10)
console.log(palio.calcularGastoDePercuso(190,7))

