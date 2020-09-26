// Prototypes
// CRIA UMA REFERÊNCIA COM OS MÉTODOS NO PROTOTYPE
// NÃO FAZENDO UMA CÓPIA DO MÉTODO TODAS AS VEZES QUE UM OBJETO É CRIADO

// Construtora -> Molde 01 (Classe)
function Pessoa1(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new Pessoa1('André', 'Rodrigues');
console.dir(pessoa1);
/*
Pessoa {
    nome: 'André',
    sobrenome: 'Rodrigues',
    nomeCompleto: [Function]
}
*/

// CRIANDO UMA PROPRIEDADE NO PROTOTYPE DA FUNÇÃO CONSTRUTORA
// A NOVA PROPRIEDADE OU MÉTODO, NO PROTOTYPE NÃO É VISÍVEL
Pessoa1.prototype.propriedadeNoPrototype =
	'Teste de NOVA PROPRIEDADE no Prototype!';
console.dir(pessoa1);
/*
Pessoa {
    nome: 'André',
    sobrenome: 'Rodrigues',
    nomeCompleto: [Function]
}
*/
console.log(pessoa1.propriedadeNoPrototype); // Teste de NOVA PROPRIEDADE no Prototype!

// CRIANDO UM NOVO MÉTODO NO PROTOTYPE DA FUNÇÃO CONSTRUTORA
// A NOVA PROPRIEDADE OU MÉTODO, NO PROTOTYPE NÃO É VISÍVEL
Pessoa1.prototype.metodoNoPrototype = () =>
	'Teste de NOVO MÉTODO no Prototype!';
console.dir(pessoa1);
/*
Pessoa {
    nome: 'André',
    sobrenome: 'Rodrigues',
    nomeCompleto: [Function]
}
*/
console.log(pessoa1.metodoNoPrototype()); // Teste de NOVO MÉTODO no Prototype!

// Construtora -> Molde 02 (Classe)
// CRIANDO MÉTODO EM PROTOTYPE JUNTO COM A FUNÇÃO CONSTRUTORA
function Pessoa2(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	// FUNÇÃO NO PROTOTYPE
	Pessoa2.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}
const pessoa2 = new Pessoa2('Camila Maria', 'Belizário');
console.dir(pessoa2); // Pessoa2 { nome: 'Camila Maria', sobrenome: 'Belizário' }
console.log(pessoa2.nomeCompleto()); // Camila Maria Belizário
