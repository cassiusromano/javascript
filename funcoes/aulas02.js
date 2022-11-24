function escrevaMeuNome(nome){
 return   `Meu nome é ${nome}`
}
escrevaMeuNome('Cassius');
escrevaMeuNome('João');

function vereficarIdade(idade) {
    if (idade >= 18){
        console.log(escrevaMeuNome('Cassius') + ' e sou de maior')
    }
    else{
        console.log(escrevaMeuNome('Cassius') +' e sou menor de idade')
    }
}
vereficarIdade(1)


