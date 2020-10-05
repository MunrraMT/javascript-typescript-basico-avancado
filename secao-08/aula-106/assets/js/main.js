// Fetch API (GET) + Async/Await

document.addEventListener('click', (event) => {
	event.preventDefault();
	const element = event.target;

	if (element.localName === 'a') return carregaPagina(element);
});

async function carregaPagina(element) {
	try {
		const href = element.getAttribute('href');
		const response = await fetch(href);

		if (response.status !== 200) throw new Error('Erro 404!');

		const html = await response.text();
		carregaResultado(html);
	} catch (error) {
		console.log(error);
	}
}

function carregaResultado(response) {
	const resultado = document.querySelector('.resultado');
	return (resultado.innerHTML = response);
}
