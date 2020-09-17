// Closures

function retornaFuncao() {
	const nome = 'Luiz';
	return function () {
		return nome;
	};
}
const funcao = retornaFuncao();
console.log(funcao);
console.log(funcao());
console.dir(funcao);
