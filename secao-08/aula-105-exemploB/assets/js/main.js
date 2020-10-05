// XMLHttpRequest (GET) + Promise + Try Catch

const request = (obj) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(obj.method, obj.url, true);
		xhr.send();

		xhr.addEventListener('load', () => {
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.responseText);
			} else {
				reject(xhr.statusText);
			}
		});
	});
};

document.addEventListener('click', (event) => {
	event.preventDefault();
	const element = event.target;

	if (element.localName === 'a') return carregaPagina(element);
});

async function carregaPagina(element) {
	const href = element.getAttribute('href');
	const objConfig = {
		method: 'GET',
		url: href,
	};

	try {
		const response = await request(objConfig);
		carregaResultado(response);
	} catch (error) {
		console.log(error);
	}
}

function carregaResultado(response) {
	const resultado = document.querySelector('.resultado');
	return (resultado.innerHTML = response);
}
