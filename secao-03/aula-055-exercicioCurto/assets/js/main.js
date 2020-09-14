// ESCREVA UMA FUNÇÃO QUE RECEBE DOIS NÚMEROS E RETORNA O MAIOR DELES
function minhaSolucao01(a, b) {
	return Math.max(a, b);
}
console.log(minhaSolucao01(10, 5)); // 10

function solucaoDoProfessor01A(x, y) {
	if (x > y) {
		return x;
	} else {
		return y;
	}
}
console.log(solucaoDoProfessor01A(10, 5)); // 10

function solucaoDoProfessor01B(x, y) {
	if (x > y) {
		return x;
	}
	return y;
}
console.log(solucaoDoProfessor01B(10, 5)); // 10

function solucaoDoProfessor01C(x, y) {
	if (x > y) return x;
	return y;
}
console.log(solucaoDoProfessor01C(10, 5)); // 10

function solucaoDoProfessor01D(x, y) {
	return x > y ? x : y;
}
console.log(solucaoDoProfessor01D(10, 5)); // 10

const solucaoDoProfessor01E = (x, y) => (x > y ? x : y);
console.log(solucaoDoProfessor01E(10, 5)); // 10
