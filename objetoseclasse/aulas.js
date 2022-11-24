const pessoa = {
    nome: 'Cassius A Romano',
    idade: 20,

   desccrever: function () {
        console.log(`Meu nome é ${this.nome} e minnha idade é de ${this.idade} anos.`)
    
    }
};

pessoa['nome'] = 'teste';
pessoa.nome ='teste';
