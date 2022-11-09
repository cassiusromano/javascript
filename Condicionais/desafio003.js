// 2) Elabore um algoritmo que dado o peso e a altura mostre sua condição de acordo com a tabela abaixo:

// IMC em adultos Condição:
// - Abaixo de 18.5 abaixo do peso;
// - Entre 18.5 e 25 Peso Normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obesidade Grave;

// Formula IMC:
// IMC = peso / (altura * altura)

const peso = 150;
const altura = 1.85;
const imc = peso / (altura * altura);

if(imc < 18.5){
    console.log('Abaixo do peso');
} else if((imc >= 18.5) && (imc < 25)){
    console.log('Peso Normal');
} else if((imc >= 25) && (imc < 30)) {
    console.log('Acima do Peso');
} 
else if((imc >=30) && (imc < 40)){
    console.log('Obeso');
} else{
    console.log('Obesidade Grave');
}


