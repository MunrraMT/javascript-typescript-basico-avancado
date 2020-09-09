function saudacaoA(nome) {
	console.log(`Bom dia, ${nome}!`);
}
saudacaoA('André');
saudacaoA('Camila');
saudacaoA('Pérola');

function saudacaoB(nome) {
	return `Bom dia, ${nome}!`;
}
const saudacaoCamila = saudacaoB('Camila');
console.log(saudacaoCamila);

function soma(a, b) {
	return a + b;
}
console.log(soma(10, 5));
console.log(soma(5, 10));
console.log(soma(5, 5));

// VALOR PADRÃO PARA PARÂMETROS DA  FUNÇÃO
function soma(a = 1, b = 1) {
	return a + b;
}
console.log(soma());

// FUNÇÃO ANÔNIMA DENTRO DE VARIÁVEL
const raizA = function (a) {
	return a ** 0.5;
};
console.log(raizA(9));

// ARROW FUNCTION SIMPLES
const raizB = (a) => {
	return a ** 0.5;
};
console.log(raizB(25));

// ARROW FUNCTION COMPLETO DE UMA LINHA E UM PARÂMETRO
const raizC = (a) => a ** 0.5;
console.log(raizC(81));
