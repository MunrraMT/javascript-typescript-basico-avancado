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
// [[Scopes]]: Scopes[3]
// 0: Closure (retornaFuncao)
// nome: "Luiz"
// 1: Script {funcao: ƒ}
// 2: Global

function retornaFuncao2(nome) {
	const nome2 = 'Luiz';
	return function () {
		return nome;
	};
}
const funcao2 = retornaFuncao2('Luiz');
const funcao3 = retornaFuncao2('joão');

console.dir(funcao2);
// [[Scopes]]: Scopes[3]
// 0: Closure (retornaFuncao2) {nome: "Luiz"}
// 1: Script {funcao: ƒ, funcao2: ƒ, funcao3: ƒ}
// 2: Global

console.dir(funcao3);
// [[Scopes]]: Scopes[3]
// 0: Closure (retornaFuncao2) {nome: "joão"}
// 1: Script {funcao: ƒ, funcao2: ƒ, funcao3: ƒ}
// 2: Global
