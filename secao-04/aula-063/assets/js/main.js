// Declaração de Função (Function Hoisting)
falaOi();
function falaOi() {
	console.log('Oi!');
}

// Fist-Class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
	console.log('Sou um dado.');
};

const souUmDado2 = function nomeDaFuncao() {
	console.log('Sou um dado.');
};

function executaFuncao(funcao) {
	console.log('Vou executar a função abaixo:');
	funcao();
}
executaFuncao(souUmDado);

// Arrow Function
const arrowFunction = () => {
	console.log('Sou uma arrow function');
};
arrowFunction();

// Dentro de um objeto, com function
const obj = {
	falar: function () {
		console.log('Estou falando!');
	},
};
obj.falar();

// Dentro de um objeto, sem function
const obj2 = {
	falar() {
		console.log('Ainda estou falando!');
	},
};
obj2.falar();
