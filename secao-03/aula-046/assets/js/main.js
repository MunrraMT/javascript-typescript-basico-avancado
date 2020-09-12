// Atribuição via desestruturação (Objetos)
const pessoa = {
	nome: 'Luiz',
	sobrenome: 'Miranda',
	idade: 30,
	endereco: {
		rua: 'Av Brasil',
		numero: 320,
	},
};

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade); // Luiz Miranda 30

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO COM VALOR PADRÃO
const { nome = 'Não existe', sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade); // Luiz Miranda 30

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO COM NOME DA VARIÁVEL DIFERENTE
const { nome: teste, sobrenome, idade } = pessoa;
console.log(teste, sobrenome, idade); // Luiz Miranda 30

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO COM MÉTODO DE OBJETO
const {
	endereco: { rua, numero },
} = pessoa;
console.log(rua, numero); // Av Brasil 320

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO COM OPERADOR RESTO(...)
const { nome, ...resto } = pessoa;
console.log(nome); // Luiz
console.log(resto); // {sobrenome: 'Miranda',bidade: 30, endereco: { rua: 'Av Brasil', numero: 320 }}
