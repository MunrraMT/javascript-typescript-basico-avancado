/*
VALORES FALSY:
false
0
'' "" ``
null undefined
NaN
*/

console.log('Luiz' && 'Maria');
console.log('Luiz' && undefined && 'Maria');

function falaOi() {
	return 'Oi';
}

let vaiExecutar = 'João';
console.log(vaiExecutar && falaOi());
console.log(0 || false || null || 'Luiz Otávio' || true);

let corUsuario = null;
const corPadrao = 'Preto';
console.log(corUsuario || corPadrao);
corUsuario = 'vermelho';
console.log(corUsuario || corPadrao);
