// Escopo Léxico

const nome1 = 'Luiz';
function falaNome1() {
	console.log(nome1);
}
function usaFalaNome1() {
	falaNome1();
}
usaFalaNome1(); // 'Luiz'

const nome2 = 'Luiz';
function falaNome2() {
	const nome2 = 'Otávio';
	console.log(nome2);
}
function usaFalaNome2() {
	falaNome2();
}
usaFalaNome2(); // 'Otávio'

const nome3 = 'Luiz';
function falaNome3() {
	console.log(nome3);
}
function usaFalaNome3() {
	const nome3 = 'Otávio';
	falaNome3();
}
usaFalaNome3(); // 'Luiz'
