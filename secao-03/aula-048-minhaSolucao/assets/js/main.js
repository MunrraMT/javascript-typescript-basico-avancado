const elementos = [
	{ tag: 'p', texto: 'Frase 1' },
	{ tag: 'div', texto: 'Frase 2' },
	{ tag: 'footer', texto: 'Frase 3' },
	{ tag: 'section', texto: 'Frase 4' },
];

function criaElementos() {
	const section = document.querySelector('#container');

	const divBase = criaDivBase();

	for (let i = 0; i < elementos.length; i++) {
		const { tag, texto } = elementos[i];
		const criaTexto = document.createElement(tag);
		criaTexto.innerHTML = texto;
		divBase.appendChild(criaTexto);
	}

	section.appendChild(divBase);
}

function criaDivBase() {
	const divBase = document.createElement('div');
	return divBase;
}

criaElementos();
