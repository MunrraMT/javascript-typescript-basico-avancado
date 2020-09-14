// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (Number). Retorne true se a imagem estiver no modo paisagem

function minhaSolucao(largura, altura) {
	return largura > altura;
}
console.log(minhaSolucao(1920, 1080));
console.log(minhaSolucao(720, 1080));

function ePaisagem1(largura, altura) {
	return largura > altura ? true : false;
}
console.log(ePaisagem1(1920, 1080));
console.log(ePaisagem1(1080, 1920));

function ePaisagem2(largura, altura) {
	return largura > altura;
}
console.log(ePaisagem2(1920, 1080));
console.log(ePaisagem2(1080, 1920));
console.log(ePaisagem2(1920, 1920));

const ePaisagem3 = (largura, altura) => largura > altura;

console.log(ePaisagem3(1920, 1080));
console.log(ePaisagem3(1080, 1920));
console.log(ePaisagem3(1920, 1920));
