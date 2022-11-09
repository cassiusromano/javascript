// //1) Faça uma algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e asua classificaçao conforme a tabela abaixo.

// Média = (nota1 + nota2 + nota3) / 3;

// classificaçao:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média maior que 7, passou de semestre;

const nota1 = 7;
const nota2 = 1;
const nota3 = 4;

const media = (nota1 + nota2 + nota3) / 3;
if(media < 5){
    console.log('Aluno Reprovado')
} else if((media >= 5) && (media < 7)){
    console.log('Aluno em recuperação')
}
else{
    console.log('Aluno aprovado')
}




