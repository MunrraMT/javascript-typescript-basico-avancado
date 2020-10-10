const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiusculo = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraSimbolos = '!@#$%¨&*()-_=+[{]}^~/?;:.>,<|';

export default function geraSenha(
	qtd,
	maiusculas,
	minusculas,
	numeros,
	simbolos
) {
	const senhaArray = [];
	const quantidade = Number(qtd);

	for (let i = 0; i <= quantidade; i++) {
		maiusculas && senhaArray.push(geraMaiusculo());
		minusculas && senhaArray.push(geraMinuscula());
		numeros && senhaArray.push(geraNumero());
		simbolos && senhaArray.push(geraSimbolos.charAt(rand(0, 28)));
	}

	const novaSenha = senhaArray.join('').slice(0, quantidade);

	return novaSenha;
}
