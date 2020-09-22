// Funções construtoras (constructor functions)

function Pessoa(nome, sobrenome) {
	// ATRIBUTOS OU MÉTODOS PRIVADOS
	const ID = 123456;
	const metodoInterno = () => {
		return 'Método Interno';
	};

	// ATRIBUTOS OU MÉTODOS PÚBLICOS
	this.nome = nome;
	this.sobrenome = sobrenome;

	this.nomeCompleto = () => {
		return `Oi, meu nome é ${this.nome} ${this.sobrenome}`;
	};

	this.fala = (texto) => {
		return `${this.nome}: ${texto}`;
	};
}
const p1 = new Pessoa('André', 'Rodrigues');
const p2 = new Pessoa('Camila Maria', 'Belizário');
console.log(p1);
/*
Pessoa {
	nome: 'André',
    sobrenome: 'Rodrigues',
    nomeCompleto: [Function],
    falaOi: [Function]
}
*/
console.log(p2);
/*
Pessoa {
    nome: 'Camila Maria',
    sobrenome: 'Belizário',
    nomeCompleto: [Function],
    falaOi: [Function]
}
*/
console.log(p2.nomeCompleto()); // Oi, meu nome é Camila Maria Belizário
console.log(p2.fala('Olá coleguinhas')); // Camila Maria: Olá coleguinhas
console.log(p2.fala('Bem vindos ao meu canal do YouTube')); // Camila Maria: Bem vindos ao meu canal do YouTube
