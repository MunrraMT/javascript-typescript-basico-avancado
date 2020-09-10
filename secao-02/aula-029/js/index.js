// VARIÁVEL CONST SENDO MODIFICADA SEM USAR SINAL DE IGUAL
const myArray = [1, 2, 3];
myArray.push(4);
myArray[0] = 'Luiz';
console.log(myArray);

console.log('');

// AGRUPANDO COM OBJETOS
const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const pessoal1 = {
	nome: 'Luiz',
	sobrenome: 'Miranda',
	idade: 25,
};
console.log(pessoal1.nome);

console.log('');

// CRIANDO OBJETOS COM FUNÇÃO
function criarPessoaA(nome, sobrenome, idade) {
	return {
		nome: nome,
		sobrenome: sobrenome,
		idade: idade,
	};
}
let pessoalA = criarPessoaA('Luiz', 'Miranda', 25);
let pessoalB = criarPessoaA('André', 'Rodrigues', 30);
let pessoalC = criarPessoaA('Camila Maria', 'Martinho', 26);
console.log(pessoalA);
console.log(pessoalB);
console.log(pessoalC);

console.log('');

// CRIANDO OBJETOS COM FUNÇÃO, RETORNO DE  OBJETOS SIMPLIFICADO
function criarPessoaB(nome, sobrenome, idade) {
	return { nome, sobrenome, idade };
}
pessoalA = criarPessoaB('Luiz', 'Miranda', 25);
pessoalB = criarPessoaB('André', 'Rodrigues', 30);
pessoalC = criarPessoaB('Camila Maria', 'Martinho', 26);
console.log(pessoalA);
console.log(pessoalB);
console.log(pessoalC);

console.log('');

// CRIANDO MÉTODO EM OBJETO
const pessoaA = {
	nome: 'Luiz',
	sobrenome: 'Miranda',
	idade: 25,

	fala() {
		console.log(
			`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos!`
		);
	},

	incrementaIdade() {
		this.idade++;
	},
};
pessoaA.fala();
pessoaA.incrementaIdade();
pessoaA.fala();
pessoaA.incrementaIdade();
pessoaA.fala();
