// // 
// 3) Elabore um algoritmo que calcule o que deve seer pago por um produto, considerando o preco normal de etiqueta e a escolha da condição de pagamento.
// Ultilize os códigos de tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1- À vista Débito, recebe 10% de desconto;
// 2- À vista no Dinheiro ou Pix, recebe 15% de desconto;
// 3- Em duas vezes, preço normal de etiqueta sem juros;
// 4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const precoEtiqueta = 200;
const formaPagamento = 2;

if(formaPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1) )
} else if(formaPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
}
else if(formaPagamento === 3){
        console.log(precoEtiqueta)

        }
else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}
