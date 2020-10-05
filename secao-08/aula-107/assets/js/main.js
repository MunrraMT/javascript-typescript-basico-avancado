// Fetch API:
fetch('./assets/pessoas.json')
	.then((resposta) => resposta.json())
	.then((json) => carregaElementosNaPagina(json));

//Axios (JSON):
axios('./assets/pessoas.json').then((respota) =>
	carregaElementosNaPagina(respota.data)
);

function carregaElementosNaPagina(json) {
	const table = document.createElement('table');
	table.style.width = '100%';

	for (const pessoa of json) {
		const tr = document.createElement('tr');

		const td1 = document.createElement('td');
		const strong = document.createElement('strong');
		strong.innerHTML = pessoa.nome;
		td1.innerText = 'Nome: ';
		td1.appendChild(strong);

		const td2 = document.createElement('td');
		td2.innerText = `Idade: ${pessoa.idade}`;

		tr.appendChild(td1);
		tr.appendChild(td2);

		table.appendChild(tr);
	}

	const resultado = document.querySelector('.resultado');
	resultado.appendChild(table);
}
